import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-handy-hooks';
import { Link, Heading } from 'basic-styled-uikit';

import { useFetchUsersActions, useUsersSelector, useFetchUsersRequestSelector } from '../../redux/users';
import {
  Card,
  InputField,
  SubmitButton,
  Container,
} from '../../components';

export const Users = () => {
  const users = useUsersSelector();
  const { loading } = useFetchUsersRequestSelector();
  const { fetchUsers } = useFetchUsersActions();

  const initialValues = {
    name: '',
  };

  const { getFieldProps, handleSubmit } = useForm({
    initialValues,
    onSubmit: fetchUsers,
  });

  return (
    <Container className="pv-6">
      <Card className="pa-8">
        <form onSubmit={handleSubmit} className="flex flex-row items-start -mh-4">
          <div className="col ph-4">
            <InputField placeholder="Search" id="search" {...getFieldProps('name')} />
          </div>
          <div className="col-auto ph-4">
            <SubmitButton submitting={loading} onClick={handleSubmit}>
            Search
            </SubmitButton>
          </div>
        </form>
        <div>
          <Heading as="h5" marginBottom>
            Results:
          </Heading>
          <ul>
            {Object.values(users).map(({ id, name }) => (
              <li key={id}>
                <Link as={RouterLink} to={`/users/${id}`}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Container>
  );
};

export default Users;
