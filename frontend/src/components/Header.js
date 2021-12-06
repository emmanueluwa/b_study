import { AppBar, Box, Typography, Tabs, Tab, Toolbar, IconButton, Badge, Hidden, Drawer, List, ListItemText, Divider, ListItem } from '@material-ui/core';
import React from 'react'

import StarBorderIcon from '@material-ui/icons/StarBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
   ...theme.container
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
  },
  logo: {
    ...theme.fonts.bold,
  },
  badge: {
    backgroundColor: theme.palette.common.amberbg,
    border: '1px white solid',
  },
  indicator: {
    backgroundColor: theme.palette.common.light
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // make sure content is below header
    ...theme.mixins.toolbar,
  }
}));


const Header = () => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false); 

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }

  const [tabIndex, setTabIndex] = useState(false);

  const handleTabIndexChange = (event, index) => {
    setTabIndex(index)
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={classes.container}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              color="inherit"
              arial-label="menu"
              onClick={handleDrawerOpen}
              >
              <MenuIcon className={classes.burger} />
            </IconButton>
          </Hidden>
          <Typography component="h6" className={classes.logo}>PRAYR</Typography>
          <Hidden smDown>
            <Tabs 
              value={tabIndex} 
              onChange={handleTabIndexChange}
              className={classes.tabs} 
              classes={{ indicator: classes.indicator }}>
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
              <Badge badgeContent={2} classes={{ badge: classes.badge  }}>
                <StarBorderIcon />
              </Badge>
            </IconButton> 

            <IconButton size="small" component={Link} to={'/acount'} color="inherit" edge="start" arial-label="My account">
                <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer 
        variant="persistent" 
        anchor="left" 
        open={openDrawer} >
        <div  className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem 
            key={0} 
            component={Link} 
            to={'/'} 
            selected={true} 
            button>
              <ListItemText primary={'Home'} />
          </ListItem>

          <ListItem 
            key={1} 
            component={Link} 
            to={'/'} 
            selected={false} 
            button>
              <ListItemText primary={'Theology'} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )
}

export default Header
