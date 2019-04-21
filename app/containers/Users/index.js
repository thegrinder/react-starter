import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-handy-hooks';
import { Link, Heading } from 'basic-styled-uikit';

import {
  Card, InputField, SubmitButton, Container,
} from '../../components';
import { fetchUsersActions, getUsers, getFetchUsersRequestState } from '../../redux/users';

const propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const Users = ({ fetchUsers, users, loading }) => {
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
            <InputField placeholder="search" id="search" {...getFieldProps('name')} />
          </div>
          <div className="col-auto ph-4">
            <SubmitButton submitting={loading}>
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

Users.propTypes = propTypes;


const mapStateToProps = (state) => {
  const { loading } = getFetchUsersRequestState(state);
  return {
    loading,
    users: getUsers(state),
  };
};

const mapDispatchToProps = {
  fetchUsers: fetchUsersActions.trigger,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
