/**
 * /redux/reducers/index.js - combines all reducers into one reducer that is mapped to props by a component
 *
 * Spring 2021
 */
import { combineReducers } from 'redux';

import LectureReducer from './lectureReducer';

const rootReducer = combineReducers({
  lectures: LectureReducer,
});

export default rootReducer;
