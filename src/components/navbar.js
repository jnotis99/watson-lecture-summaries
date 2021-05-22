import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  root: {
    // backgroundColor: '#333',
    margin: 0,
  },
  navItem: {
    paddingRight: '50px',
  },
}));

const NavBar = (props) => {
  const styles = useStyles();
  return (
    <nav className={styles.root}>
      <Box flexDirection="row">
        <NavLink to="/" exact className={styles.navItem}>Home</NavLink>
        <NavLink to="/lectures" exact className={styles.navItem}>About</NavLink>
        <NavLink to="/lectures/id1" className={styles.navItem}>test id1</NavLink>
        <NavLink to="/lectures/id2" className={styles.navItem}>test id2</NavLink>
      </Box>
    </nav>
  );
};

export default NavBar;
