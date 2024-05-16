import { CreateGameSchema, CreateModalitySchema, CreatePlaceSchema, CreateTeamSchema, FindGameSchema, FindTeamSchema, UpdateGameSchema, UpdateModalitySchema, UpdatePlaceSchema, UpdateTeamSchema } from '@/utils/schemas'
import { z } from 'zod'
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