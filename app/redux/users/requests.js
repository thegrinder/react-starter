import axios from '../axios';

export const fetchUsers = queryParams => axios.get('/users', { params: queryParams });
