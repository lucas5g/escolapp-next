import { Genre, Profile } from "@prisma/client";
import { z } from "zod";

const unityId =  z.number()


/**
 * Game
 */

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



/**
 * Group
 */
export const FindGroupSchema = z.object({
  unityId
})

/**
 * Modality
 */
export const CreateModalitySchema = z.object({
  name: z.string(),
  membersQuantity: z.coerce.number(),
  teamsQuantity: z.coerce.number(),
  type: z.enum(['collective', 'individual', 'participative', 'ranking']),
  unityId: z.number()
})

export const UpdateModalitySchema = CreateModalitySchema.partial()

/**
 * Place
 */

export const CreatePlaceSchema = z.object({
  name: z.string(),
  unityId: z.number()
})

export const UpdatePlaceSchema = CreatePlaceSchema.partial()

/**
 * Point
 */
export const FindPointSchema = z.object({
  unityId
})


/**
 * Setup
 */

export const CreateSetupSchema = z.object({
  documentLink: z.string().url(),
  unityId: z.number()
})
export const UpdateSetupSchema = CreateSetupSchema.partial()
export const FindSetupSchema = UpdateSetupSchema

/**
 * Student
 */

/**
 * Team
 */

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

/**
 * Unity
 */

export const CreateUnitySchema = z.object({
  name: z.string(),
  spreedsheetId: z.string()  
})

export const UpdateUnitySchema = CreateUnitySchema.partial()



/**
 * User
 */

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  profile: z.nativeEnum(Profile), 
  unityId: z.number()
})  

export const UpdateUserSchema = CreateUserSchema.partial()
export const FindUserSchema = CreateUserSchema.partial()







