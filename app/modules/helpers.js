export const initialRequestState = {
  error: {},
  initialLoad: true,
  loading: false,
  succeeded: false,
};

export const createRequest = namespace => {
  const actionTypes = {
    FAILED: `${namespace}/FAILED`,
    FULFILLED: `${namespace}/FULFILLED`,
    LOADING: `${namespace}/LOADING`,
    RESET: `${namespace}/RESET`,
    UPDATE: `${namespace}/UPDATE`,
    SUCCEEDED: `${namespace}/SUCCEEDED`,
    TRIGGER: `${namespace}/TRIGGER`,
  };

  const actionCreators = {
    failed: error => ({ error, type: actionTypes.FAILED }),
    succeeded: () => ({ type: actionTypes.SUCCEEDED }),
    fulfilled: () => ({ type: actionTypes.FULFILLED }),
    loading: () => ({ type: actionTypes.LOADING }),
    reset: () => ({ type: actionTypes.RESET }),
  };

  const reducer = (state = initialRequestState, action) => {
    switch (action.type) {
      case actionTypes.LOADING:
        return {
          ...state,
          error: {},
          loading: true,
          succeeded: false,
        };
      case actionTypes.SUCCEEDED:
        return {
          ...state,
          succeeded: true,
        };
      case actionTypes.FAILED:
        return {
          ...state,
          error: action.error,
        };
      case actionTypes.FULFILLED:
        return {
          ...state,
          initialLoad: false,
          loading: false,
        };
      case actionTypes.RESET:
        return {
          ...initialRequestState,
          initialLoad: state.initialLoad,
        };
      default:
        return state;
    }
  };

  return {
    actionCreators,
    actionTypes,
    reducer,
  };
};
