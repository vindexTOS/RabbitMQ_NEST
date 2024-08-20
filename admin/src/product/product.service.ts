import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository, ReturnDocument } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async all(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(data: any): Promise<Product> {
    return this.productRepository.save(data);
  }

  async getSingle(id:number):Promise<Product>{
    return this.productRepository.findOne({
        where: { id },
      });
  }

  async update(id:number, data:any){
    return this.productRepository.update(id,data);
  }
}
