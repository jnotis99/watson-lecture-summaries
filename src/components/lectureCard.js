/**
 * lectureCard.js - small view of the lecture's title that is seen in the landing page (all lectures)
 * Displays the title and links to a view of the individual lecture's key concepts
 *
 * Joseph Notis, Spring 2021
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Card, CardActions, CardContent, Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: '350px',
    maxWidth: '550px',
    margin: '10px 25px',
    textDecoration: 'none',
  },

});

const LectureCard = (props) => {
  const styles = useStyles();
  const linkObj = {
    pathname: `/lectures/${props.lecture.id}`,
    state: props.lecture,
  };

  return (
    <Link to={linkObj} className={styles.root}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">{props.lecture.title}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">Learn More</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default LectureCard;
