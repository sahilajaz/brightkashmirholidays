import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./entity/product.entity";
import { Repository } from "typeorm";
import { ProductDto } from "./dto/ProductDto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async saveProductWithPhoto(productDto: ProductDto, file: Express.Multer.File) {
    const newProduct = this.productRepository.create({
      ...productDto,
      photoUrl: file.path,
    });
    return await this.productRepository.save(newProduct);
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }
}
