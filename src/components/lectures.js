import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import LectureCard from './lectureCard';
import { getLectures } from '../redux/actions';

const useStyles = makeStyles({
  root: {
    padding: '25px 50px',
  },
});

const Lectures = (props) => {
  const styles = useStyles();

  useEffect(() => {
    props.getLectures();
    // console.log(props.lectureArr);
  }, []);

  const renderLectures = () => {
    if (props.lectureArr) {
      const lecJsx = props.lectureArr.map((lec) => {
        // console.log(lec);
        return <LectureCard lecture={lec} key={lec._id} />;
      });
      return lecJsx;
    } else return <div />;
  };

  return (
    <Box flexDirection="column" justifyContent="center" alignItems="flex-center" className={styles.root}>
      <Box className="posts-header" alignSelf="flex-start">
        <Typography variant="h3">Lectures</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="flex-start" alignItems="center">
        { renderLectures() }
      </Box>
    </Box>
  );
};

function mapStateToProps(reduxState) {
  return {
    lectureArr: reduxState.lectures.all,
  };
}

export default withRouter(connect(mapStateToProps, { getLectures })(Lectures));
