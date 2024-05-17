import { googleSheets } from '@/libs/google-sheets';
import { UnityService } from '@/services/UnityService';
import { FindGroupType } from '@/utils/types';

export class GroupService {

  async findAll(data: FindGroupType) {
    const unity = await new UnityService().findOne(data.unityId)

    const groups = await googleSheets({
      range: 'G:H',
    }) as {
      turma: string;
      quantidade: number;
    }[];

    return groups.map((group) => {
      return {
        id: group.turma,
        name: group.turma,
        quantity: group.quantidade,
      };
    });
  }
}
