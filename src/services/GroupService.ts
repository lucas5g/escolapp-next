export class GroupService {

  async findMany() {
    const unity = await this.unityService.findOne(auth.unity_id);

    const groups = (await googleSheets({
      spreadsheetId: unity.spreedsheetId,
      range: 'G:H',
    })) as {
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
}