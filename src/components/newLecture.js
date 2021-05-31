import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Container, TextField, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import axios from 'axios';
import { createLecture } from '../redux/actions';
import { addLecture } from '../utils/lectureAPI';

const useStyles = makeStyles({
  formInput: {
    margin: '20px 0',
    width: '75%',
  },
  lectureText: {
    margin: '20px 0',
    width: '75%',
  },
});

const NewLecture = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const styles = useStyles();

  const checkInputs = () => {
    return title === '' || text === '';
  };

  const onSubmit = () => {
    // const ROOT_URL = 'http://localhost:9090/api';
    // axios.post(`${ROOT_URL}/lectures`, { title, text }).then(() => {
    //   props.history.push('/');
    //   // dispatch(fetchPosts());
    // }).catch((error) => {
    //   console.log(error);
    // });
    addLecture({ title, text }, props.history);
  };

  return (
    <Container direction="column" justify="center" align="center">
      <div>
        <TextField
          required
          variant="outlined"
          label="Lecture title"
          value={title}
          onChange={(event) => { setTitle(event.target.value); }}
          className={styles.formInput}
        />
      </div>
      <div>
        <TextField
          required
          multiline
          rowsMax={25}
          variant="outlined"
          label="Lecture text"
          value={text}
          onChange={(event) => { setText(event.target.value); }}
          className={styles.lectureText}
        />
      </div>
      <div>
        <Button variant="contained" type="button" disabled={checkInputs()} onClick={onSubmit}>Summarize!</Button>
      </div>
    </Container>
  );
};

export default withRouter(connect(null, { createLecture })(NewLecture));
