import { Box, Grid, Stack, Typography, Button } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: '#212121 !important',
            height: '100%',
            paddingLeft: {  xs: '5%', sm: '10%', md: '7%', lg: '6.5%', xl: '4.5%' },
            paddingRight: '1%',
            paddingBottom: '3.5%',
        }}>
            <Grid container sx={{ pt: 1 }} spacing={3}>
    
              <Grid item xs={12} md={6}>

                <Stack direction="column">
                    <Typography variant='h4' sx={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>
                        About us
                    </Typography>
                    <Typography variant='paragraph' sx={{ color: 'white', textAlign: 'justify', mt: 1.5, fontSize: 15  }}>
                    Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Lorem ipsum dolor sit amet,
                    </Typography>
                    <Typography variant='paragraph' sx={{ color: 'white', textAlign: 'justify', mt: 1, fontSize: 15, mb: 1.5  }}>
                    vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per.
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
    
              
              <Grid item xs={12} md={3}>
                <Stack direction="column">
                    <Typography variant='h4' sx={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>
                        About us
                    </Typography>
                </Stack>
              </Grid>

              <Grid item xs={12} md={3}>
                <Stack direction="column">
                    <Typography variant='h4' sx={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>
                        About us
                    </Typography>
                </Stack>
              </Grid>
    
            </Grid>
        </Box>
      )
}

export default Footer