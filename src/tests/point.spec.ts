import { PointService } from "@/services/PointService";
import { describe, expect, it } from "vitest";

describe('Point', () => {
  it('Report points', async() => {
    const points = await PointService.findMany()
    points.forEach(point => {
      expect(point).toHaveProperty('totalPoints')
      expect(point).toHaveProperty('teams')
    })
  })
})