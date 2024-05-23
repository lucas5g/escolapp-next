import bcrypt from 'bcrypt'
import { CreateUserType } from '@/utils/types'
import { CreateUserSchema } from '@/utils/schemas'
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

  static async findMany(data: any) {
    const where = userFilterSchema.parse(data)
    return UserRepository.findMany(where)
  }

  static async findById(id: number) {
    return UserRepository.findById(id)
  }



  static async update(id: number, data: UserUpdateType) {

    const user = userUpdateSchema.parse(data)

    if (user.password) {
      user.password = await bcrypt.hash(user.password, 12)
    }
    return await UserRepository.update(id, user)
  }

  remove(id: number) {
    return prisma.user.delete({
      where: { id }
    })
  }

}
