import bcrypt from 'bcrypt'
import { CreateUserType, FindUserType, UpdateUserType } from '@/utils/types'
import { CreateUserSchema, FindUserSchema, UpdateUserSchema } from '@/utils/schemas'
import { prisma } from '@/libs/prisma'
export class UserService {

  private select = {
    id: true,
    email: true,
    profile: true,
    unityId: true
  }

  async create(createUser: CreateUserType) {

    const data = CreateUserSchema.parse(createUser)

    const userExist = await prisma.user.findUnique({
      where: {
        email: data.email
      }
    })

    if (userExist) {
      throw new Error(`Já foi cadastrado o usuário com e-mail ${data.email}!`)
    }

    data.password = await bcrypt.hash(data.password, 12)

    return await prisma.user.create({
      data,
      select: this.select
    })

  }

  findAll(data: FindUserType) {
    return prisma.user.findMany({
      where: FindUserSchema.parse(data),
      select: this.select
    })
  }

  findOne(id: number) {
    return prisma.user.findUniqueOrThrow({
      where: { id },
      select: this.select
    })
  }

  async update(id: number, user: UpdateUserType) {

    const data = UpdateUserSchema.parse(user)

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12)
    }

    return prisma.user.update({
      where:{id},
      data,
      select:this.select
    })

  }

  remove(id: number) {
    return prisma.user.delete({
      where: { id }
    })
  }

}
