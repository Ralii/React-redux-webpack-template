import EXAMPLE_ACTION from './exampleActions';

const initialState = {
  exampleState: '',
};

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case EXAMPLE_ACTION:
      return Object.assign(state, { exampleState: action.payload });
    default:
      return state;
  }
}
