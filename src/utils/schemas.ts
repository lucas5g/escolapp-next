import { Genre } from "@prisma/client";
import { z } from "zod";

/**
 * Places 
 */

export const CreatePlaceSchema = z.object({
  name: z.string(),
  unityId: z.number()
})

export const UpdatePlaceSchema = CreatePlaceSchema.partial()

export const CreateModalitySchema = z.object({
  name: z.string(),
  membersQuantity: z.coerce.number(),
  teamsQuantity: z.coerce.number(),
  type: z.enum(['collective', 'individual', 'participative', 'ranking']),
  unityId: z.number()
})

export const UpdateModalitySchema = CreateModalitySchema.partial()




const profiles = [
  'coordinator', 
  'admin',
  'teacher',
  'judge',
  'manager', 
  'representative'
] as const 

export const userCreateSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  profile: z.enum(profiles), 
  unityId: z.number()
})  

export const userUpdateSchema = userCreateSchema.extend({
  id: z.number().optional(),
  password: z.string().optional()
})

export const userFilterSchema = z.object({
  profile: z.enum(profiles).optional()
})
export type UserCreateType = z.infer<typeof userCreateSchema>
export type UserUpdateType = z.infer<typeof userUpdateSchema>


export const groupSchema = z.object({
  name: z.string(),
  unityId: z.number()
})

export const groupFilterSchema = z.object({
  unityId: z.coerce.number()
})

export type GroupFilterType = z.infer<typeof groupFilterSchema>

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export const authUpdateMeSchema = z.object({
  name: z.string(),
  password: z.string().optional(),
  unityId: z.number()
})

export type authType = z.infer<typeof authSchema>

export const CreateGameSchema = z.object({
  date: z.string(),
  startHours: z.string(),
  endHours: z.string(),
  placeId: z.number(),
  modalityId: z.number(),
  userId: z.number(),
  comments: z.string().optional().nullable(),
  teams:z.array(
    z.object({
      id: z.number(),
      goals: z.number(),
      fairPlay: z.number(),
      points: z.number()
    })
  )
})

export const UpdateGameSchema = CreateGameSchema.partial()

export const FindGameSchema = z.object({
  userId: z.coerce.number(),
  placeId: z.coerce.number(),
  date: z.string(),
}).partial()



export const studentFilterSchema = z.object({
  group: z.string().optional(),
  unity: z.string()
  // codcur:z.coerce.number().optional(),
  // codper:z.coerce.number().optional()
})

export type StudentFilterType = z.infer<typeof studentFilterSchema>

export const CreateTeamSchema = z.object({
  name: z.string(),
  modalityId: z.coerce.number(),
  group: z.string(),
  genre: z.nativeEnum(Genre),
  students:z.string().array(),
  unityId: z.number()
})

export const UpdateTeamSchema = CreateTeamSchema.partial()
export const FindTeamSchema = z.object({
  unityId: z.number(),
  name: z.string(),
  modalityId: z.number()
}).partial()





export const unitySchema = z.object({
  name: z.string()
})

export const setupSchema = z.object({
  documentLink: z.string().url(),
  unityId: z.number()
})