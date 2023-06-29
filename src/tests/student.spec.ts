import { describe, expect, it } from "vitest";
import { StudentService } from "@/services/StudentService";

describe('Student', () => {
  it('Student list', async () => {
    const students = await StudentService.findMany({unity:'contagem'}) as any[]
    students.forEach(student => {
      expect(student).toHaveProperty('name')
      expect(student).toHaveProperty('ra')
      
    })
  })

})