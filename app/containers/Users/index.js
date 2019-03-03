import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsersActions, getUsers } from '@/redux/users';

const propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

const Users = ({ fetchUsers, users }) => {
  console.log(fetchUsers, users);
  return (
    <div>Users</div>
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
