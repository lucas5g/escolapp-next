import {  Modality, Team, Unity, User } from "@prisma/client"
import {format} from 'date-fns'

export const unities: Unity[] = [
  {
    id: 1,
    name: 'bh',
    spreedsheetId: 'id1',
  },
  {
    id: 2,
    name: 'contagem',
    spreedsheetId: 'id2'
  },
  {
    id: 3,
    name: 'unity test',
    spreedsheetId: 'id3'
  }
]
export const groups = [
  {
    id: 1,
    name: 'TESTE',
    unityId: 2
  },
  {
    "id": 2,
    "name": "F1AMARELO",
    unityId: 2
  },
  {
    "id": 3,
    "name": "F1VERDE",
    unityId: 2
  }
]

export const modalities: Modality[] = [
  {
    "id": 1,
    "name": "Futebol",
    "membersQuantity": 10,
    "teamsQuantity": 2,
    "type": "collective",
    unityId: 2
  },
  {
    "id": 2,
    "name": "xadrez",
    "membersQuantity": 1,
    "teamsQuantity": 2,
    "type": "individual",
    unityId: 2
  }
]

export const places = [
  {
    id: 1,
    name: 'Quadra',
    unityId: 2

  },
  {
    id: 2,
    name: 'sala',
    unityId: 2
  },
  {
    id: 3,
    name: 'campo bh',
    unityId: 1
  }
]

export const users: User[] = [
  {
    id: 1,
    email: 'test@mail.com',
    password: 'qweqwe',
    unityId: 2,
    profile: 'manager'
  },
  {
    id: 2,
    email: 'admin@mail.com',
    password: 'qweqwe',
    unityId: 2,
    profile: 'admin'
  },
  {
    id: 3,
    email: 'mediador@mail.com',
    password: 'qweqwe',
    unityId: 2,
    profile: 'coordinator'
  },
]

export const games = [
  {
    id: 1,
    date: format(new Date(), 'yyyy-MM-dd'),
    startHours: "08:00",
    endHours: "09:00",
    placeId: 1,
    modalityId: 1,
    userId: 2,
    unityId: 2,
    teams: [
      {
        id: 1,
        gols: 0,
        points: 0,
        fairPlay: 0
      },
      {
        id: 3,
        gols: 0,
        points: 0,
        fairPlay: 0
      },
    ]
  },
  {
    id:2,
    date: format(new Date(), 'yyyy-MM-dd'),
    startHours: "08:00",
    endHours: "09:00",
    placeId: 1,
    modalityId: 1,
    userId: 2,
    unityId: 2,
    teams: [
      {
        id: 1,
        gols: 1,
        points: 3,
        fairPlay: 0
      },
      {
        id: 3,
        gols: 2,
        points: 1,
        fairPlay: 0
      },
    ]
  }
]

export const teams: Team[] = [
  {
    id: 1,
    name: 'Futebol',
    modalityId: 1,
    group: 'f1',
    genre: 'mas',
    unityId:2,
    students: ['C123123', 'C321321']
  },
  {
    id: 2,
    name: 'xadrez',
    modalityId: 2,
    group: 'f2',
    genre: 'misto',
    unityId: 2,
    students: ['C123123', 'C321321']
  },
  {
    id: 3,
    name: 'Futebol 3',
    modalityId: 1,
    group: 'f1',
    genre: 'mas',
    unityId:2,
    students: ['C123123', 'C321321']
  },
  {
    id: 4,
    name: 'Futebol 4',
    modalityId: 1,
    group: 'f2',
    genre: 'misto',
    unityId: 2,
    students: ['C123123', 'C321321']
  },
]


export const setups = [
  {
    id: 1,
    unityId: 2,
    documentLink: 'https://docs.google.com/document/d/1U0uJvTwSmepAQZgiPAlbNiqYBY4RggBCV4bjtO5H9zY/edit?usp=drive_link'
  },
  {
    id: 2,
    unityId: 1,
    documentLink: 'https://docs.google.com/document/d/1U0uJvTwSmepAQZgiPAlbNiqYBY4RggBCV4bjtO5H9zY/edit?usp=drive_link'
  },

]