import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Controller('products')
export class ProductController {


constructor (private readonly productService:ProductService,@Inject("PRODUCT_SERVICE") private readonly client:ClientProxy){}




@Get()
async all(){
    return await  this.productService.all()
}


@EventPattern('hello')
async hello(data:string){
   
console.log(data)
}

@Post()
async create(@Body() body){
    return  await this.productService.create(body)
}


@Get(":id")

async getSingle(@Param("id") id:number ){

    return await this.productService.getSinlge(id)

}


@Put(":id")
async update(@Param("id") id:number , @Body() body:any){
    return await this.productService.update(id, body)
}

}
