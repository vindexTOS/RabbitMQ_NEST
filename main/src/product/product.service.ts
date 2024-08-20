import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private readonly  productModel:Model<Product> ){}

 async all(){
    return this.productModel.find().exec();
 }


  async create(body:any){

      
     
  }


}
