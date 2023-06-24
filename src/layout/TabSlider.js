import { Box, Grid, Stack, Typography, Button } from '@mui/material'
import React from 'react'

// Icons
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

// MUI Component
import CardSoft from '../components/card/CardSoft';
import MUITabs from '../components/tabs/MUITabs';

const TabSlider = () => {
    return (
        <Box sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.03) !important',
            height: '100%',
            paddingLeft: {  xs: '5%', sm: '10%', md: '7%', lg: '6.5%', xl: '4.5%' },
            paddingRight: '10%',
            paddingBottom: '3.5%',
        }}>
            <Grid container sx={{ pt: 10 }} spacing={2}>
    
              <Grid item xs={12} md={6}>
                <MUITabs />
              </Grid>
    
              
              <Grid item xs={12} md={6}>
    
                <Stack direction="column" sx={{ paddingTop: { xs: '1%', md: '6%', lg: '20%' }  }}>
                  <Typography variant='h5' sx={{ fontSize: 22, fontWeight: 'bold' }}>
                    Manage your blog and Generate content efficently
                  </Typography>
                  <Typography variant='paragraph' sx={{ color: 'rgba(0, 0, 0, 0.7)', textAlign: 'justify', mt: 1.5, fontSize: 15  }}>
                  Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Lorem ipsum dolor sit amet,
                  </Typography>
                  <Typography variant='paragraph' sx={{ color: 'rgba(0, 0, 0, 0.7)', textAlign: 'justify', mt: 1, fontSize: 15, mb: 1.5  }}>
                  vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per.
                  </Typography>
    
                  <Button 
                      endIcon={<ChevronRightOutlinedIcon />}
                      variant='outlined'
                      sx={{
                          color: '#3f51b5',
                          width: { xs: '32%', sm: '30%', md: '30%', lg: '25%' },
                          // boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', 
                          textTransform: 'capitalize',
                          '&:hover': {
                              boxShadow: 'none'
                          } 
                      }}
                  >
                  View all
                  </Button>
    
    
    
                </Stack>
    
              </Grid>
    
            </Grid>
        </Box>
      )
}

export default TabSlider