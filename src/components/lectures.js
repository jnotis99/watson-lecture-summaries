import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import LectureCard from './lectureCard';

const useStyles = makeStyles({
  root: {
    padding: '25px 50px',
  },
});

const Lectures = (props) => {
  const styles = useStyles();

  const lectureArr = [
    {
      id: 1,
      name: 'Lecture 1',
      description: 'Test 1',
    },
    {
      id: 2,
      name: 'Lecture 2',
      description: 'Test 2',
    },
    {
      id: 3,
      name: 'Lecture 3',
      description: 'Test 3',
    },
  ];

  const renderLectures = () => {
    if (lectureArr) {
      const lecJsx = lectureArr.map((lec) => {
        return <LectureCard lecture={lec} key={lec.id} />;
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

export default Lectures;
