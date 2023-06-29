import { prisma } from "@/libs/prisma";
import { GroupFilterType } from "../utils/schemas";
export class GroupRepository {

  static async findMany(filter: GroupFilterType){
    return await prisma.group.findMany({
      orderBy:{
        name:'asc'
      },
      where:filter
    })
  }

  static async findById(id:number) {
    return await prisma.group.findUnique({
      where: { id }
    })
  }

  static async findByColumn(column:string, value:any){
    return await prisma.group.findFirst({
      where:{
        [column]:value
      }
    })
  }


  static async create(data:any) {
    return await prisma.group.create({ data })
  }

  static async update(id:number, data:any){
    return await prisma.group.update({
      where: {id},
      data,
    })
  }

  static async delete(id:number){
    return await prisma.group.delete({
      where: {id}
    })
  }
}