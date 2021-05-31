import { combineReducers } from 'redux';

import LectureReducer from './lectureReducer';

const rootReducer = combineReducers({
  lectures: LectureReducer,
});

export default rootReducer;
