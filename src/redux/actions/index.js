import axios from 'axios';

export const ActionTypes = {
  GET_LECTURES: 'GET_LECTURES',
  GET_LECTURE: 'GET_LECTURE',
};

// const ROOT_URL = 'https://watson-lecture-summaries.herokuapp.com/api';
const ROOT_URL = 'localhost:9090/api';

export function getLectures() {
  return ((dispatch) => {
    axios.get(`${ROOT_URL}/lectures`)
      .then((response) => {
        dispatch({ type: ActionTypes.GET_LECTURES, payload: response.data });
      });
  });
}

export function getLecture(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/lectures/${id}`)
      .then((response) => {
        dispatch({ type: ActionTypes.GET_LECTURE, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function addLecture(newLecture, history) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/lecturess`, newLecture)
      .then((response) => {
        console.log(`created: ${response}`);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function deleteLecture(id, history) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/lectures/${id}`)
      .then((_response) => {
        history.push('/');
      }).catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
