import { cache } from "@/libs/node-cache";
import { PointRepository } from "@/repositories/PointRepository";

export class PointService{
  static async findMany(){

    if (cache.has('points')) {
      return cache.get('points') as any[]
    }

    const points = await PointRepository.findMany()

    cache.set('points', points)
    return points

  }
}