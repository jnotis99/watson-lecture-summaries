import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';

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
  addButton: {
    color: '#333',
  },
});

const NavBar = (props) => {
  const styles = useStyles();
  return (
    <nav className={styles.root}>
      <Box flexDirection="row">
        <NavLink to="/" exact className={styles.navItem}>Home</NavLink>
        {/* <NavLink to="/lectures/new" exact className={styles.navItem}>Add Lecture</NavLink> */}
      </Box>
      <NavLink to="/lectures/new">
        <IconButton>
          <AddCircleIcon fontSize="large" className={styles.addButton} />
        </IconButton>
      </NavLink>
    </nav>
  );
};

export default NavBar;
