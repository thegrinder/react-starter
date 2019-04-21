import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Heading } from 'basic-styled-uikit';

import { isEmptyObj } from '../../helpers/utils';
import { Card, Spinner } from '../../components';
import { fetchUserActions, getUser, getFetchUserRequestState } from '../../redux/users';

const propTypes = {
  fetchUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  user: PropTypes.object,
};

const defaultProps = {
  user: {},
};

const User = ({ fetchUser, user, loading, match }) => {
  useEffect(() => {
    fetchUser(match.params.uid);
  }, []);

  if (loading || isEmptyObj(user)) {
    return (
      <div className="pa-6 tc">
        <Spinner color="#777" />
      </div>
    );
  }

  return (
    <Card className="pa-6">
      <Heading as="h1" sizing="h3">
        {user.name}
      </Heading>
    </Card>
  );
};

User.propTypes = propTypes;
User.defaultProps = defaultProps;

const mapStateToProps = (state, { id }) => {
  const { loading } = getFetchUserRequestState(state);
  return {
    loading,
    user: getUser(state, id),
  };
};

const mapDispatchToProps = {
  fetchUser: fetchUserActions.trigger,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
