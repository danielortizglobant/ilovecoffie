/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus, Patch, Delete, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery): string {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  insertOne(@Body() body) {
    console.log(body.name)
    return body;
  }

  @Patch(':id')
  update(id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }

}
