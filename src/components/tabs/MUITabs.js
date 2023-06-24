import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Images
import screen1 from '../../static/images/login.jpg';
import screen2 from '../../static/images/dashboard.jpg';
import screen3 from '../../static/images/calendar.jpg';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const MUITabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>

        <Box sx={{ borderBottom: 1, borderColor: 'transparent' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Trending Topic" {...a11yProps(1)} />
            <Tab label="Generate & Post" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <img src={screen1} alt="screen1" style={{ maxWidth: '100%', height: 'auto' }} />
        </TabPanel>
        <TabPanel value={value} index={1}>
            <img src={screen2} alt="screen2" style={{ maxWidth: '100%', height: 'auto' }} />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <img src={screen3} alt="screen3" style={{ maxWidth: '100%', height: 'auto' }} />
        </TabPanel>
      </Box>
    );
}

export default MUITabs