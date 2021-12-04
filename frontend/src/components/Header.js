import { AppBar, Box, Typography, Tabs, Tab, Toolbar, IconButton, Badge, Hidden } from '@material-ui/core';
import React from 'react'

import StarBorderIcon from '@material-ui/icons/StarBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';


import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '900px',
    margin: '0 auto',
    border: '1px yellow dotted'
  },
  iconsWrap: {
    marginLeft: 'auto',
    '& .MuiButtonBase-root': {
      marginLeft: '13px'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '28px'
    }
  },
  
  tabs: {
    '& .MuiTab-root': {
      minWidth: 10,
      marginLeft: '10px'
    }
  },
  burger: {
    fontSize: '35px',
    marginRight: '10px'
  }
}));



const Header = () => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={classes.container}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              arial-label="menu"
              >
              <MenuIcon className={classes.burger} />
            </IconButton>
          </Hidden>
          <Typography component="h6">PRAYR</Typography>
          <Hidden smDown>
            <Tabs value={0} className={classes.tabs}>
                <Tab 
                  key={0}
                  label={'Home'}
                  component={Link}
                  to={'/'}
                />
                <Tab 
                  key={1}
                  label={'Theology'}
                  component={Link}
                  to={'/theology'}
                />
            </Tabs>
          </Hidden>
          <Box className={classes.iconsWrap}>
            <IconButton size="small" component={Link} to={'/favourites'} color="inherit" edge="start" arial-label="favourites">
              <Badge badgeContent={2}>
                <StarBorderIcon />
              </Badge>
            </IconButton>

            <IconButton size="small" component={Link} to={'/acount'} color="inherit" edge="start" arial-label="My account">
                <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
