import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Card, CardActions, CardContent, Typography,
} from '@material-ui/core';
// import { connect } from 'react-redux';

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

  return (
    <Link to={() => { return `/lectures/${props.lecture.id}`; }} className={styles.root}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">{props.lecture.name}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">Learn More</Button>
        </CardActions>
      </Card>
    </Link>
  );
};

export default LectureCard;
