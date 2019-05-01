import { initialRequestState } from '../helpers';
import { initialUsersState } from './reducer';

export const createUser = (user = {}) => ({
  id: 'id',
  name: 'name',
  username: 'username',
  email: 'email@email.com',
  phone: '132456776',
  ...user,
});

export const createRequestState = (requestState = {}) => ({
  ...initialRequestState,
  ...requestState,
});

export const createUsersState = ({
  requestKey = '',
  requestState = {},
  data = {},
} = {}) => ({
  ...initialUsersState,
  data: {
    ...initialUsersState.data,
    ...data,
  },
  requests: {
    ...initialUsersState.requests,
    ...(requestKey && {
      [requestKey]: {
        ...initialUsersState.requests[requestKey],
        ...requestState,
      },
    }),
  },
});

export const createState = args => ({
  users: createUsersState(args),
});
