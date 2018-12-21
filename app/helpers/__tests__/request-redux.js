import { createRequest, initialRequestState } from '../request-redux';

const { actionCreators, actionTypes, reducer } = createRequest('test');
const error = 'error';

describe('actions', () => {
  it('should create LOADING action', () => {
    const expectedAction = {
      type: actionTypes.LOADING,
    };
    expect(actionCreators.loading()).toEqual(expectedAction);
  });

  it('should create FAILED action', () => {
    const expectedAction = {
      error,
      type: actionTypes.FAILED,
    };
    expect(actionCreators.failed(error)).toEqual(expectedAction);
  });

  it('should create FULFILLED action', () => {
    const expectedAction = {
      type: actionTypes.FULFILLED,
    };
    expect(actionCreators.fulfilled()).toEqual(expectedAction);
  });

  it('should create RESET action', () => {
    const expectedAction = {
      type: actionTypes.RESET,
    };
    expect(actionCreators.reset()).toEqual(expectedAction);
  });
});

describe('reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, { type: 'NOOP' })).toEqual(initialRequestState);
  });

  it('should handle LOADING action', () => {
    const expectedState = {
      ...initialRequestState,
      loading: true,
    };
    expect(reducer(initialRequestState, actionCreators.loading())).toEqual(
      expectedState,
    );
  });

  it('should handle FAILED action', () => {
    const expectedState = {
      ...initialRequestState,
      error,
    };
    expect(reducer(initialRequestState, actionCreators.failed(error))).toEqual(
      expectedState,
    );
  });

  it('should handle FULFILLED action', () => {
    const state = {
      ...initialRequestState,
      loading: true,
    };
    const expectedState = {
      ...initialRequestState,
      initialLoad: false,
      loading: false,
    };
    expect(reducer(state, actionCreators.fulfilled())).toEqual(expectedState);
  });

  it('should handle RESET action', () => {
    const state = {
      error: null,
      initialLoad: false,
      loading: false,
    };
    expect(reducer(state, actionCreators.reset())).toEqual(initialRequestState);
  });
});
