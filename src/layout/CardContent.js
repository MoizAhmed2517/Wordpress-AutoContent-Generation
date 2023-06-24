import { Box, Grid, Stack, Typography, Button } from '@mui/material'
import React from 'react'

// Icons
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ShapeLineOutlinedIcon from '@mui/icons-material/ShapeLineOutlined';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';
import ConnectedTvOutlinedIcon from '@mui/icons-material/ConnectedTvOutlined';

// MUI Component
import CardSoft from '../components/card/CardSoft';

const CardContent = () => {
  return (
    <Box sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.03) !important',
        height: '100%',
        paddingLeft: {  xs: '5%', sm: '10%', md: '7%', lg: '6.5%', xl: '4.5%' },
        paddingRight: '10%',
        paddingBottom: '3.5%',
    }}>
        <Grid container sx={{ pt: 10 }}>

          <Grid item xs={12} md={6}>

            <Grid container>

              <Grid item xs={12} md={6}>
                <CardSoft icon={<ContentPasteIcon sx={{ height: 22, width: 22, color: '#ff9100' }} />}  text="heading 1" />
              </Grid>

              <Grid item xs={12} md={6}>
                <CardSoft icon={<ShapeLineOutlinedIcon sx={{ height: 22, width: 22, color: '#ff9100' }} />}  text="heading 2" />
              </Grid>

              <Grid item xs={12} md={6}>
                <CardSoft icon={<AltRouteOutlinedIcon sx={{ height: 22, width: 22, color: '#ff9100' }} />}  text="heading 3" />
              </Grid>

              <Grid item xs={12} md={6}>
                <CardSoft icon={<ConnectedTvOutlinedIcon sx={{ height: 22, width: 22, color: '#ff9100' }} />}  text="heading 4" />
              </Grid>

            </Grid>
              
          </Grid>

          
          <Grid item xs={12} md={6}>

            <Stack direction="column" sx={{ paddingTop: '10%'  }}>
              <Typography variant='h4' sx={{ fontSize: 28, fontWeight: 'bold' }}>
                Made by business people for business people
              </Typography>
              <Typography variant='paragraph' sx={{ color: 'rgba(0, 0, 0, 0.7)', textAlign: 'justify', mt: 1.5, fontSize: 15  }}>
              Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Lorem ipsum dolor sit amet,
              </Typography>
              <Typography variant='paragraph' sx={{ color: 'rgba(0, 0, 0, 0.7)', textAlign: 'justify', mt: 1, fontSize: 15, mb: 1.5  }}>
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

        </Grid>
    </Box>
  )
}

export default CardContent