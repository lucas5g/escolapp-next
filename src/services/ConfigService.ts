import { cache } from "@/libs/node-cache"

export class ConfigService{
  static async clearCaches(){
    cache.flushAll()
    return {message: 'Caches deletados.'}
  }
}