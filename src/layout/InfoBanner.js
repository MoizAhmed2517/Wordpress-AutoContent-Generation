import { Box, Grid, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import banner from '../static/images/3.svg';



const InfoBanner = () => {
    return (
        <Box sx={{
            backgroundColor: 'rgba(255, 255, 255, 1) !important',
            height: '100%',
            paddingLeft: {  xs: '5%', sm: '10%', md: '7%', lg: '6.5%', xl: '4.5%' },
            paddingRight: {  xs: '5%', sm: '10%', md: '7%', lg: '6.5%', xl: '4.5%' },
            paddingBottom: '3.5%',
        }}>
            <Grid container justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
    
              <Grid item sm={12} md={6} sx={{ paddingRight: '10%' }}>
                <Stack direction="column" sx={{ paddingTop: '2%'}}>
                  <Typography variant='h4' sx={{ fontSize: 28, fontWeight: 'bold' }}>
                    Every business matters. We give you tools to succeed.
                  </Typography>
                  <Typography variant='paragraph' sx={{ color: 'rgba(0, 0, 0, 0.7)', textAlign: 'justify', mt: 1.5, fontSize: 15  }}>
                  Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.
                  </Typography>
                  <Typography variant='paragraph' sx={{ color: 'rgba(0, 0, 0, 0.7)', textAlign: 'justify', mt: 1, fontSize: 15, mb: 1.5  }}>
                  Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea.
                  </Typography>
    
                  <Button 
                      variant="contained"
                      sx={{
                          color: 'rgba(0, 0, 0, 0.87)', 
                          bgcolor: '#ff9100', 
                          boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', 
                          textTransform: 'capitalize',
                          '&:hover': { 
                              bgcolor: '#ff6d00',
                              boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'
                          } 
                      }}
                  >
                  Try it free
                  </Button>
    
                </Stack>
              </Grid>

              <Grid item sm={12} md={6} sx={{ display: { xs: 'none', sm: 'none', md: "flex" } }}>
                <img src={banner} alt="Banner 2" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto',}} />
              </Grid>
    
            </Grid>
        </Box>
      )
}

export default InfoBanner