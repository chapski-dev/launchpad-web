import axios from 'axios'

const LAUNCHPAD_BASE_API_URL = process.env.REACT_APP_LAUNCHPAD_BASE_API_URL

const Axios = axios.create({
  baseURL: LAUNCHPAD_BASE_API_URL,
})

export const ApiRoutes = {
  LaunchpadProjects: '/launchpad/projects',
  UserProfile: '/user/profile',
  GetBlogPosts: '/api/blog/getPosts',
  ProjectSaleState: '/sale/state',
  SaleState: '/sale-state',
  Sale: '/sale',
} as const

export default Axios
