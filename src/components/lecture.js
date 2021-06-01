import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Box, IconButton, Container, Typography, List, ListItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Delete } from '@material-ui/icons';
import LaunchIcon from '@material-ui/icons/Launch';
import { deleteLecture } from '../utils/lectureAPI';
import '../style.scss';

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

  const onDelete = () => {
    deleteLecture(props.location.state.id, props.history);
  };

  const renderConcepts = () => {
    const { concepts } = props.location.state.nluOutput;
    if (concepts) {
      const lectureJsx = concepts.map((concept) => {
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
      });
      return <List>{lectureJsx}</List>;
    } else return <Typography variant="h5">Watson couldn&apos;t find any key concepts</Typography>;
  };

  return (
    <Container direction="column" justify="center" align="flex-start" className={styles.lectureContent}>
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">{props.location.state.title}</Typography>
        <IconButton onClick={onDelete}>
          <Delete fontSize="large" />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
        <Typography variant="h4">Key Concepts</Typography>
        { renderConcepts() }
      </Box>
    </Container>
  );
};

// function mapStateToProps(reduxState) {
//   return {
//     lectureArr: reduxState.lectures.all,
//   };
// }

// export default withRouter(connect(mapStateToProps, { getLecture })(Lecture));
export default withRouter(Lecture);
