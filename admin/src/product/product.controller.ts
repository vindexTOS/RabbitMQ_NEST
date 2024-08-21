import { Body, Controller, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService , @Inject("PRODUCT_SERVICE") private readonly client:ClientProxy) {}
  @Get()
  async all() {
    this.client.emit("hello","hello from robiketi")

    return this.productService.all();
  }

  @Get(':id')
  async getSingle(@Param('id') id: number) {
    return this.productService.getSingle(id);
  }

  @Post()
  create(@Body() body) {
    return this.productService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.productService.update(id, body);
  }
}
