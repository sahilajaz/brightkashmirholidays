import { Injectable } from '@nestjs/common';
import { Product } from './entity/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private productRepository : Repository<Product>){}

    async saveProductWithPhoto(productDto: ProductDto): Promise<Product> {
        const newProduct = this.productRepository.create({
          ...productDto,
        });
        return await this.productRepository.save(newProduct);
      }
}
