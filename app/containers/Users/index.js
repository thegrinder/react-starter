import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsersActions, getUsers } from 'app/redux/users';

const propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

const Users = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {Object.values(users).map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

Users.propTypes = propTypes;


const mapStateToProps = state => ({
  users: getUsers(state),
});

const mapDispatchToProps = {
  fetchUsers: fetchUsersActions.trigger,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
