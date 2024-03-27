import axios, { ApiRoutes } from './config'
import {
  GetICOJettonsRes,
  GetICOProjectByIdRes,
  GetXapiProfileResp,
} from './types'

export const getICOJettons = (params?: { q: string }) =>
  axios
    .get<GetICOJettonsRes[]>(ApiRoutes.LaunchpadProjects, { params })
    .then((res) => res.data)

export const getICOProjectById = (id: string) =>
  axios
    .get<GetICOProjectByIdRes>(`${ApiRoutes.LaunchpadProjects}/${id}`)
    .then((res) => res.data)

export const getXapiProfile = (params: {
  flag: 'pending-kyc' | 'new' | 'done' | 'done2'
}) =>
  axios
    .get<GetXapiProfileResp>(ApiRoutes.UserProfile, {
      params,
    })
    .then((res) => res.data)
