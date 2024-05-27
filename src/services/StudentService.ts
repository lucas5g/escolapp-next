import { FindUserType } from "@/utils/types"

interface StudentInterface {
  ra: string
  name: string
  group: string
  unity: string
}
export class StudentService {

  async findMany(data: FindUserType) {

    return 

    const filter = studentFilterSchema.parse(data)
    return await StudentRepository.findMany(filter)
   
  }

}