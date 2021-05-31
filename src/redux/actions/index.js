import axios from 'axios';

export const ActionTypes = {
  GET_LECTURES: 'GET_LECTURES',
  GET_LECTURE: 'GET_LECTURE',
  SET_ERROR: 'SET_ERROR',
};

// const ROOT_URL = 'https://watson-lecture-summaries.herokuapp.com/api';
const ROOT_URL = 'http://localhost:9090/api';

export function getLectures() {
  return ((dispatch) => {
    axios.get(`${ROOT_URL}/lectures`).then((response) => {
      dispatch({ type: ActionTypes.GET_LECTURES, payload: response.data });
    }).catch((error) => {
      dispatch({ type: ActionTypes.SET_ERROR, error });
    });
  });
}

export function getLecture(id) {
  console.log(id);
  return (dispatch) => {
    axios.get(`${ROOT_URL}/lectures/${id}`).then((response) => {
      console.log('HERE');
      console.log(response);
      dispatch({ type: ActionTypes.GET_LECTURE, payload: response.data });
    }).catch((error) => {
      console.log(error);
      dispatch({ type: ActionTypes.SET_ERROR, error });
    });
  };
}

export function addLecture(newLecture, history) {
  return ((dispatch) => {
    axios.post(`${ROOT_URL}/lectures`, newLecture)
      .then((response) => {
        console.log('HERE');
        history.push('/');
        console.log(`created: ${response}`);
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  });
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
