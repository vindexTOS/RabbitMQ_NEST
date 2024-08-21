import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private readonly  productModel:Model<Product> ){}

 async all(){
    return await this.productModel.find().exec();
 }


 async create(body: any): Promise<Product> {
  return  await this.productModel.create(body); 
}

async getSinlge(id:number){
   return await this.productModel.findById({id});
}


 async update (id:number, body:any) {
    return await this.productModel.updateOne({id, body})
 }

}
