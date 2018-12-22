import axios from '../axios';

export const fetchRepos = queryParams => axios.get('/search/repositories', { params: queryParams });
