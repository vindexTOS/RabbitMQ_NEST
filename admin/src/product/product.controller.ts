import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  all() {
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
