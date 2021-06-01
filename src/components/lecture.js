import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Box, IconButton, Container, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';
import { deleteLecture } from '../utils/lectureAPI';

const useStyles = makeStyles({
  lectureContent: {
    width: '80%',
    paddingTop: '20px',
  },
});

const Lecture = (props) => {
  const styles = useStyles();

  const onDelete = () => {
    deleteLecture(props.location.state.id, props.history);
  };

  return (
    <Container direction="column" justify="center" align="flex-start" className={styles.lectureContent}>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">{props.location.state.title}</Typography>
        <IconButton onClick={onDelete}>
          <Delete fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default withRouter(Lecture);
