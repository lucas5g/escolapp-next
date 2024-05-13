import { ModalityService } from "@/services/ModalityService";
import { TeamService } from "@/services/TeamService";
import { describe, expect, it } from "vitest";


describe('Modality', () => {
  const service = new ModalityService()

  it('create', async () => {

    const data = {
      name: 'teste',
      members_quantity: 22,
      teams_quantity: 2,
      type: 'collective',
      unity_id: 2
    }
  
    const res = await service.create(data)

    
    await service.delete(res.id)
  })

  it('Modality list', async () => {
    const modalities = await ModalityService.findMany({unityId: 2})
    expect(modalities.length).toBeGreaterThan(0)
    modalities.forEach(modality => {
      expect(modality).toHaveProperty('type')
    })
  })

  it('Modality show', async () => {
    const modality = await ModalityService.findById(1)
    expect(modality).toHaveProperty('membersQuantity')
  })

 

  it('Try to delete modality that has a team', async() => {

    const modality:ModalityInterface = {
      name: 'test modality del',
      membersQuantity: 1,
      teamsQuantity: 2,
      type: 'collective',
      unityId: 2
    }

    const { id: modalityId } = await ModalityService.create(modality)

    const team = {
      name: 'team del',
      students: ['c123123', 'c132132'],
      modalityId,
      groupId:1,
      genreId:1

    }
    const {id: teamId } = await TeamService.create(team)

    await expect(() => ModalityService.delete(modalityId)).rejects.toThrow('Possui Equipes com essa modalidade.')

    await TeamService.delete(teamId)
    await ModalityService.delete(modalityId)
  })

})