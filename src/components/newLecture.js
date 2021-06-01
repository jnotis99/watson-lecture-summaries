import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Container, TextField, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { createLecture } from '../redux/actions';

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
  const [buttonText, setButtonText] = useState('Summarize!');
  const [isSummarizing, setIsSummarizing] = useState(false);

  const styles = useStyles();

  const checkInputs = () => {
    return (title === '' || text === '');
  };

  useEffect(() => {
    if (checkInputs()) {
      setButtonText('Fill in lecture title and text!');
    } else {
      setButtonText('Summarize!');
    }
  }, [title, text]);

  const onSubmit = () => {
    setButtonText('Summarizing');
    props.createLecture({ title, text }, props.history);
    setIsSummarizing(true);
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
        <Button variant="contained" type="button" disabled={checkInputs() && isSummarizing} onClick={onSubmit}>{buttonText}</Button>
      </div>
    </Container>
  );
};

export default withRouter(connect(null, { createLecture })(NewLecture));
