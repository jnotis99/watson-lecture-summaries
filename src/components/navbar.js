import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#eee',
    padding: '15px 25px',
  },
  navItem: {
    paddingRight: '50px',
  },
});

const NavBar = (props) => {
  const styles = useStyles();
  return (
    <nav className={styles.root}>
      <Box flexDirection="row">
        <NavLink to="/" exact className={styles.navItem}>Home</NavLink>
        <NavLink to="/lectures/new" exact className={styles.navItem}>Add Lecture</NavLink>
      </Box>
    </nav>
  );
};

export default NavBar;
