import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Test, GlobalStyles } from '@/components';
import { fetchReposActions } from '@/redux/repos';

const propTypes = {
  fetchRepos: PropTypes.func.isRequired,
};

const Main = ({ fetchRepos }) => (
  <Fragment>
    <GlobalStyles />
    <Test onClick={() => fetchRepos({ q: 'bla' })} />
  </Fragment>
);

Main.propTypes = propTypes;

const mapDispatchToProps = {
  fetchRepos: fetchReposActions.trigger,
};

export default connect(undefined, mapDispatchToProps)(Main);
