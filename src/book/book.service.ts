import { PrismaService } from "src/prisma.service";
import { Book } from "./book.model";
import { Injectable } from "@nestjs/common";


@Injectable()
export class BookService{

    constructor(private prisma: PrismaService){}

    async create(data: Book): Promise<Book>{
        return this.prisma.book.create({
            data,
        })
    }

    async readAll(): Promise<Book[]>{
        return this.prisma.book.findMany()
    }

    async read(id:number): Promise<Book | null>{
        return this.prisma.book.findUnique({where: {id:Number(id)}})
    }

    async update(id:number,data:Book):Promise<Book>{
        return this.prisma.book.update({
            where: {id:Number(id)},
            data:{ title: data.title, description:data.description }
        })
    }

    async delete(id:number):Promise<Book>{
        return this.prisma.book.delete({
            where:{id: Number(id)}
        })
    }
}