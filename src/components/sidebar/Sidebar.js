import * as React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import profileImage from '../../static/images/profilepic.png';

// Icons
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LockIcon from '@mui/icons-material/Lock';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BookIcon from '@mui/icons-material/Book';
import TopicIcon from '@mui/icons-material/Topic';

// Material UI elements
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Stack, Badge } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
    }),
}),
);

const colors = [ 'linear-gradient(195deg, #49a3f1, #1A73E8)', 'linear-gradient(195deg, #42424a, #191919)', 'linear-gradient(195deg, #66BB6A, #43A047)', 'linear-gradient(195deg, #FFA726, #FB8C00)', 'linear-gradient(195deg, #EC407A, #D81B60)', 'linear-gradient(195deg, #EF5350, #E53935)' ]
const activeTabColor = ['#F39223', '#044d95', '#890404', '#202326', '#83062e', '#e3d20e']

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


const Sidebar = () => {
    const theme = useTheme();
    const timeoutRef = React.useRef(null);

    // States
    const [tabColor, setTabColor] = React.useState(0);
    const [activeTab, setActiveTab] = React.useState(0);
    const [activeTabColors, setActiveTabColors] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [notificationMenu, setNotificationMenu] = React.useState(null);
    const [avatarMenu, setAvatarMenu] = React.useState(null);
    const openAvatar = Boolean(avatarMenu);
    const openNoti = Boolean(notificationMenu);

    // State functions and mapping functions
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleMouseEnter = () => {
        setOpen(true);
      };
      
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
          setOpen(false);
      }, 200);
    };
      
    const handleMouseMove = () => {
      clearTimeout(timeoutRef.current);
    };

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
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar position="fixed" sx={{ background: colors[tabColor] }}>
          <Toolbar>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={()=> setOpen(!open)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>

            {/* App bar main icon -- desktop */}
            <Typography
                component={Link}
                to="/"
                variant="h5"
                noWrap
                sx={{
                ml: 4,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 1000,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                BLOGBOT
            </Typography>

            {/* App bar main icon -- mobile */}
            <Typography
                component={Link}
                to="/"
                variant="h5"
                noWrap
                sx={{
                ml: 4,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 900,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
                textAlign: 'center',
                justifyContent: { xs: 'center' },
                }}
            >
            BLOGBOT
            </Typography>

            <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>

                <Tooltip title="Notifications">
                    <IconButton 
                        onClick={handleClickNoti}
                    >
                        <Badge badgeContent={6} color="warning">
                            <NotificationsNoneOutlinedIcon sx={{ color: "#fff", height: 25, width: 25 }} />
                        </Badge>
                    </IconButton>
                </Tooltip>

                <Tooltip title="John DeSouza">
                    <IconButton
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickAvatar}
                    >
                        <Avatar alt="John Kendy" src={profileImage}  />
                    </IconButton>
                </Tooltip>

                {/* Menu - avatar */}
                <Menu
                    id="basic-menu"
                    anchorEl={avatarMenu}
                    open={openAvatar}
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

            </Box>

          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            {/* <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronRightIcon />}
            </IconButton> */}
          </DrawerHeader>
          <Divider />
          <List>
            {/* New Blog Tab */}
            <Tooltip title={"New Blog"} placement='bottom-end'>
              <ListItemButton
                  sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      borderRight: 0 === activeTab ? `3px inset ${activeTabColor[activeTabColors]}` : '2px inset #ffffff',
                      borderRadius: 0,
                      color: 0 === activeTab && activeTabColor[activeTabColors], 
                  }}
                  component={Link}
                  to='/home'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  onClick={() => handleTabClick(0)}
                  >
                  <ListItemIcon
                      sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 0 === activeTab && activeTabColor[activeTabColors],
                      }}
                  >
                      <BookIcon />
                  </ListItemIcon>
                  <ListItemText primary="New Blog" sx={{ opacity: open ? 1 : 0 }} component={Link} to='/home' />
              </ListItemButton>
            </Tooltip>

            {/* Trenging Topic Tab */}
            <Tooltip title={"Trending Topic"} placement='bottom-end'>
              <ListItemButton
                  sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      borderRight: 1 === activeTab ? `3px inset ${activeTabColor[activeTabColors]}` : '2px inset #ffffff',
                      borderRadius: 0,
                      color: 1 === activeTab && activeTabColor[activeTabColors], 
                  }}
                  component={Link}
                  to='/trending-topic'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  onClick={() => handleTabClick(1)}
                  >
                  <ListItemIcon
                      sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 1 === activeTab && activeTabColor[activeTabColors],
                      }}
                  >
                      <QueryStatsOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Trending Topic" sx={{ opacity: open ? 1 : 0 }} component={Link} to='/trending-topic' />
              </ListItemButton>
            </Tooltip>

            {/* Competitor Tracking Tab */}
            <Tooltip title={"Competitor Tracking"} placement='bottom-end'>
              <ListItemButton
                  sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      borderRight: 2 === activeTab ? `3px inset ${activeTabColor[activeTabColors]}` : '2px inset #ffffff',
                      borderRadius: 0,
                      color: 2 === activeTab && activeTabColor[activeTabColors], 
                  }}
                  component={Link}
                  to='/competitor-tracking'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  onClick={() => handleTabClick(2)}
                  >
                  <ListItemIcon
                      sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 2 === activeTab && activeTabColor[activeTabColors],
                      }}
                  >
                      <GroupOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Competitor Tracking" sx={{ opacity: open ? 1 : 0 }} component={Link} to='/competitor-tracking' />
              </ListItemButton>
            </Tooltip>

            {/* New Topic Window */}
            <Tooltip title={"Blog Topic"} placement='bottom-end'>
              <ListItemButton
                  sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      borderRight: 3 === activeTab ? `3px inset ${activeTabColor[activeTabColors]}` : '2px inset #ffffff',
                      borderRadius: 0,
                      color: 3 === activeTab && activeTabColor[activeTabColors], 
                  }}
                  component={Link}
                  to='/blog-topic'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  onClick={() => handleTabClick(3)}
                  >
                  <ListItemIcon
                      sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 3 === activeTab && activeTabColor[activeTabColors],
                      }}
                  >
                      <TopicIcon />
                  </ListItemIcon>
                  <ListItemText primary="Blog Topic" sx={{ opacity: open ? 1 : 0 }} component={Link} to='/blog-topic' />
              </ListItemButton>
            </Tooltip>

          </List>
          
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>

      </Box>
    );
}

export default Sidebar