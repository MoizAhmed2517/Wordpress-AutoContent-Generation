import * as React from 'react';
import { Link } from 'react-router-dom';

// Icons
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

// Material ui components
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Pages
const pages = [
  {
    name: 'Dashboard',
    link: '/',
  },
  {
    name: 'Survey',
    link: '/',
  },
  {
    name: 'Response',
    link: '/',
  },
  {
    name: 'Complain',
    link: '/',
  },
];

const activeTabColor = ['#F39223', '#044d95', '#890404', '#202326', '#83062e', '#e3d20e']


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

const Navbar = (props) => {

    // States 
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [activeTab, setActiveTab] = React.useState(0);
    const [activeTabColors, setActiveTabColors] = React.useState(0);
  
    // State functions and mapping functions
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleTabClickMobile = (index) => {
      setActiveTab(index);
      setAnchorElNav(null);
    };

    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    return (
      <Box>
          <CssBaseline />
          <ElevationScroll {...props}>
            <AppBar sx={{ background: '#FFFFFF', color: 'black' }}>
              <Toolbar>
                
                {/* App bar main icon -- desktop */}
                <Typography
                      variant="h5"
                      noWrap
                      sx={{
                      ml: 8,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 1000,
                      letterSpacing: '.2rem',
                      color: '#3f51b5',
                      textDecoration: 'none',
                  }}
                >
                    BLOGBOT
                </Typography>


                {/* Mobile */}
                {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page, index) => (
                      <MenuItem 
                        key={page.name} 
                        onClick={() => handleTabClickMobile(index)} 
                        component={Link} 
                        to={page.link}
                        sx={{
                          color: index === activeTab ? 'primary' : 'blue',
                        }}
                      >
                          <Typography textAlign="center">{page.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>

                </Box> */}

                {/* App bar main icon -- mobile */}
                <Typography
                        variant="h5"
                        noWrap
                        sx={{
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 1000,
                        letterSpacing: '.2rem',
                        color: '#3f51b5',
                        textDecoration: 'none',
                    }}
                >
                BLOGBOT
                </Typography>

                {/* Desktop */}
                {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 5 }}>
                  {pages.map((page, index) => (
                      <Button
                        key={page.name}
                        onClick={() => handleTabClick(index)}
                        sx={{
                          mx: .5,
                          color: index === activeTab ? activeTabColor[activeTabColors] : 'rgba(0, 0, 0, 0.87)', 
                          display: 'block',
                          borderBottom: index === activeTab ? `2px inset ${activeTabColor[activeTabColors]}` : '2px inset #ffffff',
                          borderRadius: 0,
                          fontWeight: 540,
                          textTransform: 'capitalize',
                          '&:hover': {
                            bgcolor: '#f0f0f0',
                            borderRadius: '5px',
                            border: 'transparent',
                          }
                        }}
                        component={Link}
                        to={page.link}
                      >
                        {page.name}
                      </Button>
                    ))
                  }
                </Box> */}

                <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                  <Button sx={{ mr: 2, color: 'black', textTransform: 'capitalize' }} component={Link} to="/login">Log In</Button>
                    <Button sx={{
                      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', 
                      color: 'rgba(0, 0, 0, 0.87)', 
                      mr: { xs: 2, md: 8},
                      bgcolor: '#ff9100',
                      borderRadius: '20px', 
                      textTransform: 'capitalize', 
                      '&:hover': { 
                        bgcolor: '#ff6d00',
                        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'
                        } 
                      }} 
                      variant="contained" 
                      component={Link} 
                      to="/signup"
                      startIcon={<GroupAddOutlinedIcon />}
                    >
                        Sign Up
                    </Button>
                </Box>
                
              </Toolbar>
              
            </AppBar>
          </ElevationScroll>
          <Toolbar />
        </Box>
    );
}

export default Navbar