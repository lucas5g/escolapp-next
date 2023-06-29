import { prisma } from "@/libs/prisma"

export class ModalityRepository {

  static async findMany(filter:any){
    return await prisma.modality.findMany({
      orderBy:{
        name:'asc'
      },
      where:filter
    })
  }

  static async findById(id:number) {
    return await prisma.modality.findUnique({
      where: { id }
    })
  }

  static async findByKey(key:string, data:any){
    return await prisma.modality.findUnique({
      where:{
        [key]:data
      }
    })
  }



  static async create(data:any) {
    return await prisma.modality.create({ data })
  }

  static async update(id:number, data:any){
    return await prisma.modality.update({
      where: {id},
      data,
    })
  }

  static async delete(id:number){
    return await prisma.modality.delete({
      where: {id}
    })
  }
}