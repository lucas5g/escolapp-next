import { StudentRepository } from "../repositories/StudentRepository"
import { StudentFilterType, studentFilterSchema } from "../utils/schemas"

interface StudentInterface {
  ra: string
  name: string
  group: string
  unity: string
}
export class StudentService {

  static async findMany(data: StudentFilterType) {

    const filter = studentFilterSchema.parse(data)
    return await StudentRepository.findMany(filter)
   
  }

}