import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';
import { getLecture } from '../redux/actions';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({});

const Lecture = (props) => {
  // const styles = useStyles();

  // useEffect(() => {
  //   console.log(props.match.params.id);
  //   getLecture(props.match.params.id);
  //   console.log(props.currentLecture.current);
  // }, []);

  useEffect(() => {
    getLecture(props.match.params.id);
    console.log(props.currentLecture.current);
  }, [props.match.params.id]);

  // useEffect(() => {
  //   getLecture(props.match.params.id);
  //   console.log(props.currentLecture);
  // },
  // [props.currentLecture]);

  return (
    <Container direction="column" justify="center" align="flex-start">
      <Box flexDirection="column" justifyContent="flex-start">
        {JSON.stringify(props.location.state)}
      </Box>
    </Container>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    currentLecture: reduxState.lectures,
  };
};

export default withRouter(connect(mapStateToProps, { getLecture })(Lecture));
