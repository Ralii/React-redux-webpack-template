export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

const actionHolder = (type, data) => {
  return {
    type,
    payload: data,
  };
};

export const exampleAction = () => {
  return (dispatch) => {
    return dispatch(actionHolder());
  };
};
