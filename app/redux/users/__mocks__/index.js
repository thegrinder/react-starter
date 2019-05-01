const promise = () => Promise.resolve({ data: {} });

export const fetchUser = jest.fn(promise);

export const fetchUsers = jest.fn(promise);
