import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { Book } from "./book.model";
import { BookService } from "./book.service";
import { Request, Response } from "express";

@Controller('api/book')
export class BookController{

    constructor(private readonly bookService: BookService){}

    @Post()
    async create(@Body() request:Book):Promise<Book>{
        return this.bookService.create(request)
    }

    @Get()
    async readAll(@Req() request:Request, @Res() response:Response):Promise<any>{
        const result =  await this.bookService.readAll()
        return response.status(200).json({
            status: "Ok!",
            message: "Successfully fetch data!",
            result: result 
        })
    }

    @Get(':id')
    async read(@Param('id') id:number):Promise<Book | null>{
        return this.bookService.read(id)
    }

    @Put(':id')
    async update(@Param('id') id: number,@Body() data: Book): Promise<Book> {
        return this.bookService.update(id,data);
    }

    @Delete(':id')
    async delete(@Param('id') id:number):Promise<Book>{
        return this.bookService.delete(id)
    }
}