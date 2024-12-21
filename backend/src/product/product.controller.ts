import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post, Query, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { ProductService } from "./product.service";
import { ProductDto } from "./dto/product.dto";


@Controller('product')
export class ProductController {
  constructor(private readonly productService : ProductService){} 
    
  @Post('upload-photo')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',         filename: (req, file, cb) => {
          const uniqueName = `${Date.now()}-${file.originalname}`; 
          cb(null, uniqueName);
        },
      }),
    }),
  )
  async uploadPhoto(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    return  {
      filePath: `/uploads/${file.filename}`,
    } 
  }

  @Post('create-product')
  async createProduct(@Body() productDto: ProductDto) {
    if (!productDto) {
      throw new BadRequestException('Details are required');
    }

    const savedProduct = await this.productService.saveProductWithPhoto(productDto);
    return {
      message: 'Product saved successfully',
      product: savedProduct,
    };
  }
   
    @Get('get/all')
    async getAllData() {
      try{
        const data = await this.productService.getAllData()
         return {
          message : "success",
          services: data
         }
      }
      catch(error) {
        console.error(error)
        throw new Error('Something went wrong')
      }
    }

  } 
