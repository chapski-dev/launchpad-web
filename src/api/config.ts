import axios from 'axios';

const LAUNCHPAD_BASE_API_URL = process.env.LAUNCHPAD_BASE_API_URL;

const Axios = axios.create({
  baseURL: LAUNCHPAD_BASE_API_URL,
});

export const ApiRoutes = {
  LaunchpadProjects: '/launchpad/projects',
  UserProfile: '/user/profile',
} as const;

export default Axios;
