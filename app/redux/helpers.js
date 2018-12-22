export const initialRequestState = {
  error: null,
  initialLoad: true,
  loading: false,
};

export const createRequest = (namespace) => {
  const actionTypes = {
    FAILED: `${namespace}/FAILED`,
    FULFILLED: `${namespace}/FULFILLED`,
    LOADING: `${namespace}/LOADING`,
    RESET: `${namespace}/RESET`,
    SUCCEEDED: `${namespace}/SUCCEEDED`,
    TRIGGER: `${namespace}/TRIGGER`,
  };

  const actionCreators = {
    failed: error => ({ error, type: actionTypes.FAILED }),
    fulfilled: () => ({ type: actionTypes.FULFILLED }),
    loading: () => ({ type: actionTypes.LOADING }),
    reset: () => ({ type: actionTypes.RESET }),
  };

  const reducer = (state = initialRequestState, action) => {
    switch (action.type) {
      case actionTypes.LOADING:
        return {
          ...state,
          error: null,
          loading: true,
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
        return initialRequestState;
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

export const getError = error => (
  error.response
    ? {
      message: error.response.data ? error.response.data.message : error.message,
      method: error.config.method,
      status: error.response.status,
    }
    : error
);
