import { PointService } from "@/services/PointService";
import { describe, expect, it } from "vitest";

describe('Point', () => {
  const service = new PointService()
  it('find all', async() => {
    const res = await service.findAll({unityId:2})

    console.log(JSON.stringify(res, null, 2))
    
  })
})