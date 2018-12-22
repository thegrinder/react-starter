import { axiosInstance } from '../helpers';

export const fetchRepos = queryParams => axiosInstance.get('/search/repositories', { params: queryParams });
