import { z } from 'zod'
import { CreateGameSchema, CreateModalitySchema, CreatePlaceSchema, CreateSetupSchema, CreateTeamSchema, CreateUnitySchema, CreateUserSchema, FindGameSchema, FindGroupSchema, FindPointSchema, FindSetupSchema, FindTeamSchema, FindUserSchema, UpdateGameSchema, UpdateModalitySchema, UpdatePlaceSchema, UpdateSetupSchema, UpdateTeamSchema, UpdateUnitySchema, UpdateUserSchema } from '@/utils/schemas'
export type CreatePlaceType = z.infer<typeof CreatePlaceSchema>
export type UpdatePlaceType = z.infer<typeof UpdatePlaceSchema>

export type CreateModalityType = z.infer<typeof CreateModalitySchema>
export type UpdateModalityType = z.infer<typeof UpdateModalitySchema>

export type CreateGameType = z.infer<typeof CreateGameSchema>
export type UpdateGameType = z.infer<typeof UpdateGameSchema>
export type FindGameType = z.infer<typeof FindGameSchema>

export type CreateTeamType = z.infer<typeof CreateTeamSchema>
export type UpdateTeamType = z.infer<typeof UpdateTeamSchema>
export type FindTeamType = z.infer<typeof FindTeamSchema>

export type FindGroupType = z.infer<typeof FindGroupSchema>

export type CreateUnityType = z.infer<typeof CreateUnitySchema>
export type UpdateUnityType = z.infer<typeof UpdateUnitySchema>

export type FindPointType = z.infer<typeof FindPointSchema>

export type CreateSetupType = z.infer<typeof CreateSetupSchema>
export type UpdateSetupType = z.infer<typeof UpdateSetupSchema>
export type FindSetupType = z.infer<typeof FindSetupSchema>

export type CreateUserType = z.infer<typeof CreateUserSchema>
export type UpdateUserType = z.infer<typeof UpdateUserSchema>
export type FindUserType = z.infer<typeof FindUserSchema>

