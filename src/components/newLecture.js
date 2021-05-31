import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Box, Grid, TextField, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addLecture } from '../redux/actions';

const useStyles = makeStyles({
  formInput: {
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

  return (
    <Grid direction="column" justify="center" align="center">
      <Box>
        <TextField
          required
          variant="outlined"
          label="Lecture title"
          value={title}
          onChange={(event) => { setTitle(event.target.value); }}
          className={styles.formInput}
        />
      </Box>
      <Box>
        <TextField
          required
          multiline
          variant="outlined"
          label="Lecture text"
          value={text}
          onChange={(event) => { setText(event.target.value); }}
          className={styles.formInput}
        />
      </Box>
      <Box>
        <Button variant="contained" type="button" disabled={checkInputs()}>Summarize!</Button>
      </Box>
    </Grid>
  );
};

export default withRouter(connect(null, { addLecture })(NewLecture));
