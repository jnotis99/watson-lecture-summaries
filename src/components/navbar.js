/**
 * navbar.js - Navigation Bar for LecAssist
 *
 * Joseph Notis, Spring 2021
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, IconButton, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import { Home } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#eee',
    padding: '5px 25px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navItem: {
    paddingRight: '50px',
  },
  iconButton: {
    color: '#333',
  },
});

const NavBar = (props) => {
  const styles = useStyles();
  return (
    <nav className={styles.root}>
      <Box flexDirection="row">
        <Typography variant="h6">LecAssist</Typography>
        {/* <NavLink to="/lectures/new" exact className={styles.navItem}>Add Lecture</NavLink> */}
      </Box>
      <Box>
        <IconButton>
          <NavLink exact to="/">
            <Home fontSize="large" className={styles.iconButton} />
          </NavLink>
        </IconButton>
        <NavLink to="/lectures/new">
          <IconButton>
            <AddCircleIcon fontSize="large" className={styles.iconButton} />
          </IconButton>
        </NavLink>
      </Box>
    </nav>
  );
};

export default NavBar;
