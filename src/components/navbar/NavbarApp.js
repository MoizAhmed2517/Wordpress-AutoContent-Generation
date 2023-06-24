import * as React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../static/images/profilepic.png';

// Icons
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

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
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar, Badge, Divider, Stack } from '@mui/material';

// Pages
const pages = [
  {
    name: 'AutoGPT',
    link: '/home',
  },
  {
    name: 'Track Competitor',
    link: '#',
  },
  {
    name: 'Trending Topics',
    link: '#',
  },
];

const activeTabColor = ['#3f51b5', '#F39223', '#044d95', '#890404', '#202326', '#83062e', '#e3d20e']

function createData(id, heading, days, notification){
    return {id, heading, days, notification}
}

const rows = [
    createData(1, 'Notifcation Heading 1', ' 2 days ago', 'Your competitor climatebiz has posted new blog at solar energy system'),
    createData(2, 'Notifcation Heading 2', ' 4 days ago', 'Your competitor rst has posted new blog at abc '),
    createData(3, 'Notifcation Heading 3', ' 3 days ago', 'Your competitor xyz has posted new blog at abc solar'),
    createData(4, 'Notifcation Heading 4', ' 2 days ago', 'Your competitor climatebiz has posted new blog at energy system'),
    createData(5, 'Notifcation Heading 5', ' 1 days ago', 'Your competitor mno has posted new blog at system'),
    createData(6, 'Notifcation Heading 6', ' 9 days ago', 'Your competitor pqr has posted new blog at solar energy'),
]

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

const NavbarApp = (props) => {
  // States 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState(0);
  const [activeTabColors, setActiveTabColors] = React.useState(0);

  const [avatarMenu, setAvatarMenu] = React.useState(null);
  const open = Boolean(avatarMenu);

  const [notificationMenu, setNotificationMenu] = React.useState(null);
  const openNoti = Boolean(notificationMenu);


  // State functions and mapping functions
  const handleClickNoti = (event) => {
    setNotificationMenu(event.currentTarget);
  }

  const handleCloseNoti = () => {
    setNotificationMenu(null);
  }

  const handleClickAvatar = (event) => {
    setAvatarMenu(event.currentTarget);
  }

  const handleCloseAvatar = () => {
    setAvatarMenu(null);
  }

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
          <AppBar sx={{ background: '#ffbd24', color: 'black' }}>
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
                component={Link}
                to="/"
              >
                  BLOGBOT
              </Typography>

              {/* Mobile */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon sx={{ color: '#3f51b5' }} />
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

              </Box>

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
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 5 }}>
                {pages.map((page, index) => (
                    <Button
                      key={page.name}
                      onClick={() => handleTabClick(index)}
                      sx={{
                        mx: .5,
                        color: index === activeTab ? activeTabColor[activeTabColors] : '#fff', 
                        display: 'block',
                        borderBottom: index === activeTab ? `2px inset ${activeTabColor[activeTabColors]}` : '2px inset #ffffff',
                        borderRadius: 0,
                        fontWeight: 540,
                        textTransform: 'capitalize',
                        '&:hover': {
                          bgcolor: '#fff',
                          borderRadius: '5px',
                          border: 'transparent',
                          color: '#3f51b5'
                        }
                      }}
                      component={Link}
                      to={page.link}
                    >
                      {page.name}
                    </Button>
                  ))
                }
              </Box>

              <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>

                <IconButton 
                    onClick={handleClickNoti}
                >
                    <Badge badgeContent={4} color="success">
                        <NotificationsNoneOutlinedIcon sx={{ color: "#fff", height: 25, width: 25 }} />
                    </Badge>
                </IconButton>

                {/* Menu - Notification */}
                <Menu
                    id="basic-menu"
                    anchorEl={notificationMenu}
                    open={openNoti}
                    onClose={handleCloseNoti}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    sx={{
                          width: 'auto', // Set the desired width of the notification bar
                          maxHeight: 400, // Set the maximum height before scrolling is enabled
                          overflowY: 'auto',
                          overflowX: 'hidden', // Enable scrolling when content overflows
                          whiteSpace: 'normal',
                    }}
                >
                    {
                        rows.map((row, i) => (

                            <MenuItem onClick={handleCloseNoti} component={Link} to="/login" sx={{ mb: 2 }} key={i}>
                                <ListItemIcon>
                                    <WarningAmberOutlinedIcon sx={{ color: 'rgba(0,0,0,0.6)', height: 30, width: 25 }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Stack direction="row" spacing={1}>
                                            <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "rgba(0,0,0,0.87)" }}>
                                                {row.heading} |
                                            </Typography>
                                            <Typography variant="subtitle1" sx={{ fontSize: 12, color: "rgba(0,0,0,0.6)", pt: 0.6 }}>
                                                {row.days}
                                            </Typography>
                                        </Stack>
                                    }
                                    secondary={
                                        <Typography variant="subtitle2" sx={{ color: "rgba(0,0,0,0.6)", fontSize: 12, textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, mt: -0.6 }}>
                                            <CheckBoxIcon color='primary' sx={{ height: 15, width: 15, pt: 0.5 }} /> {row.notification}
                                        </Typography>
                                    }
                                />
                            </MenuItem>

                        ))
                    }
                    
                </Menu>





                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickAvatar}
                >
                    <Avatar alt="John Kendy" src={profile}  />
                </IconButton>

                {/* Menu - avatar */}
                <Menu
                    id="basic-menu"
                    anchorEl={avatarMenu}
                    open={open}
                    onClose={handleCloseAvatar}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleCloseAvatar} component={Link} to="/settings">
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Settings
                        </ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleCloseAvatar} component={Link} to="/login">
                        <ListItemIcon>
                            <LockIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Logout
                        </ListItemText>
                        
                    </MenuItem>
                </Menu>

                

              </Box>
              
            </Toolbar>
            
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </Box>
  );
}

export default NavbarApp