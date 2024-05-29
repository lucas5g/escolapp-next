import { describe, expect, it } from "vitest";
import { StudentService } from "@/services/StudentService";

describe('Student', () => {
  const service = new StudentService()
  it('find all', async () => {
    const res = await service.findAll()

    console.log(res)

    // students.forEach(student => {
    //   expect(student).toHaveProperty('name')
    //   expect(student).toHaveProperty('ra')
      
    // })
  })

})