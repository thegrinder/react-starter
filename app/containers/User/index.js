import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Text, Heading } from 'basic-styled-uikit';

import { Card, Spinner, Container } from '../../components';
import { useFetchUserActions, useUserSelector, useFetchUserRequestSelector } from '../../redux/users';

const propTypes = {
  match: PropTypes.object.isRequired,
};

export const User = ({ match }) => {
  const { fetchUser } = useFetchUserActions();

  useEffect(() => {
    fetchUser(match.params.id);
  }, []);

  const { loading } = useFetchUserRequestSelector();
  const user = useUserSelector(match.params.id);

  if (loading || !user) {
    return (
      <div className="pa-6 tc">
        <Spinner color="#777" />
      </div>
    );
  }

  const { name, username, email, phone } = user;

  return (
    <Container className="pv-6">

      <Card className="pa-6">
        <Heading as="h1" sizing="h3" marginBottom>
          {name}
        </Heading>
        <ul className="max-w-sm">
          <li className="flex justify-between">
            <Text color="dark">username:</Text>
            <Text>{username}</Text>
          </li>
          <li className="flex justify-between">
            <Text color="dark">email:</Text>
            <Text>{email}</Text>
          </li>
          <li className="flex justify-between">
            <Text color="dark">phone:</Text>
            <Text>{phone}</Text>
          </li>
        </ul>
      </Card>
    </Container>
  );
};

User.propTypes = propTypes;

export default withRouter(User);
