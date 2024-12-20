import { Body, Controller,  Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ProductService } from "./product.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { ProductDto } from "./dto/ProductDto";
import { diskStorage } from "multer";


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/photos',
        filename: (req , file, cb)=> {
          cb(null , `${file.originalname}`)
      }
      }),
    }),
  )
  async uploadProduct(
    @Body() productDto: ProductDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(productDto);
    const savedProduct = await this.productService.saveProductWithPhoto(
      productDto,
      file,
    );
    return {
      message: 'Product saved successfully.',
      product: savedProduct,
    };
  }
}
