/**
 * lecture.js - Component for the individual lecture view
 * Shows the lecture title, key concepts, the concepts' correspending dbpedia links
 *  and a delete button for each lecture
 *
 * Joseph Notis, Spring 2021
 */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Box, IconButton, Container, Typography, List, ListItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';
import LaunchIcon from '@material-ui/icons/Launch';
import '../style.scss';
import { getLecture, deleteLecture } from '../redux/actions';

const useStyles = makeStyles({
  lectureContent: {
    width: '80%',
    paddingTop: '20px',
  },
  listText: {
    marginRight: '50px',
  },
});

const Lecture = (props) => {
  const styles = useStyles();

  useEffect(() => {
    props.getLecture(props.match.params.id);
  }, []);

  useEffect(() => {
    props.getLecture(props.match.params.id);
  }, [props.match.params.id]);

  const onDelete = () => {
    props.deleteLecture(props.location.state.id, props.history);
  };

  const renderConcepts = () => {
    const { concepts } = props.location.state.nluOutput;
    if (concepts) {
      const lectureJsx = concepts.map((concept) => {
        if (concept.relevance > 0.6) {
          return (
            <ListItem key={concept.text}>
              <Box display="flex" flexDirection="row" justifyContent="space-around" alignItems="center">
                <Typography variant="h6" className={styles.listText}>{concept.text}</Typography>
                <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center">
                  <a href={concept.dbpedia_resource} target="blank" rel="noreferrer"><Typography variant="body1">Learn more on DBPedia<LaunchIcon fontSize="small" /></Typography>
                  </a>
                </Box>
              </Box>
            </ListItem>
          );
        } else return <span key={concept.text} />;
      });
      return (
        <Box>
          <Typography variant="h5">Key Concepts</Typography>
          <List>
            {lectureJsx}
          </List>
        </Box>
      );
    } else return <Typography variant="h5">Watson couldn&apos;t find any key concepts</Typography>;
  };

  return (
    <Container direction="column" justify="center" align="flex-start" className={styles.lectureContent}>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">{props.lecture.title}</Typography>
        <IconButton onClick={onDelete}>
          <Delete fontSize="large" />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
        { renderConcepts() }
      </Box>
    </Container>
  );
};

function mapStateToProps(reduxState) {
  return {
    lecture: reduxState.lectures.current,
  };
}

export default withRouter(connect(mapStateToProps, { getLecture, deleteLecture })(Lecture));
// export default withRouter(Lecture);
