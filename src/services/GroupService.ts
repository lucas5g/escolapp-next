import { cache } from "@/libs/node-cache"
import { groupFilterSchema, groupSchema } from "@/utils/schemas"
import { UnityService } from "./UnityService"
import { GroupRepository } from "@/repositories/GroupRepository"
import { StudentService } from "./StudentService"
import { TeamRepository } from "@/repositories/TeamRepository"

export class GroupService{

  static async findMany(data?: any){
    const {unityId} = groupFilterSchema.parse(data)
    const groupsCache = `groups_${unityId}`
    if(cache.has(groupsCache)){
      return cache.get(groupsCache)
    }

    const unity = await UnityService.findById(unityId!)
    const groupsWithoutQuantityStudents = await GroupRepository.findMany({unityId})
    const students = await StudentService.findMany({unity: unity?.name! })


    const groups = groupsWithoutQuantityStudents.map(group => {
      return {
        ...group,
        quantity: students.filter(student => student.group === group.name).length
      }
    })

    cache.set(groupsCache, groups)
    return groups

  }

  static async findById(id:number){
    return await GroupRepository.findById(id)
  }

  static async create(data:any){
    cache.flushAll()
    const group = groupSchema.parse(data)
    if(await GroupRepository.findByColumn('name', group.name)){
      throw new Error(`A turma ${group.name} já foi cadastrado!.`)
    }


    return await GroupRepository.create(group)
  }

  static async update(id:number, data:any){
    cache.flushAll()
    const group = groupSchema.parse(data)
    return await GroupRepository.update(id, group)
  }

  static async delete(id:number){
    cache.flushAll()
    
    if(await TeamRepository.findByColumn('groupId', id)){
      throw new Error('Não foi possível deletar :(\nPossui Equipes com essa turma.')
    }
    // console.log({id})
    return await GroupRepository.delete(id)
  }
}