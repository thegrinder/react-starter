import axios from '../axios';

export const fetchUsers = queryParams => axios.get('/users', { params: queryParams });

export const fetchUser = uid => axios.get(`/users/${uid}`);
