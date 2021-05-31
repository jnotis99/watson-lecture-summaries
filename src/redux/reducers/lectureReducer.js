import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const LectureReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LECTURES:
      return { all: action.payload, current: initialState.current };
    case ActionTypes.GET_LECTURE:
      return { all: state.all, current: action.payload };
    default:
      return state;
  }
};

export default LectureReducer;
