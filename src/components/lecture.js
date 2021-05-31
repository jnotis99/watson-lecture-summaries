import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Box, IconButton, Container, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles({
  lectureContent: {
    width: '80%',
    paddingTop: '20px',
  },
});

const Lecture = (props) => {
  const styles = useStyles();

  return (
    <Container direction="column" justify="center" align="flex-start" className={styles.lectureContent}>
      <Box flexDirection="row" justifyContent="center" alignItems="center">
        <Typography variant="h3">{props.location.state.title}</Typography>
        <IconButton>
          <Delete />
        </IconButton>
      </Box>
    </Container>
  );
};

// const mapStateToProps = (reduxState) => {
//   return {
//     currentLecture: reduxState.lectures,
//   };
// };

// export default withRouter(connect(mapStateToProps, { getLecture })(Lecture));
export default withRouter(Lecture);
