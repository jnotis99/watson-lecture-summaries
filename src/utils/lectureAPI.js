import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';

export function addLecture(newLecture, history) {
  axios.post(`${ROOT_URL}/lectures`, newLecture).then(() => {
    history.push('/');
  }).catch((error) => {
    console.log(error);
  });
}

export function deleteLecture(id, history) {
  axios.delete(`${ROOT_URL}/lectures/${id}`)
    .then((_response) => {
      history.push('/');
    }).catch((error) => {
      console.log(error);
    });
}
