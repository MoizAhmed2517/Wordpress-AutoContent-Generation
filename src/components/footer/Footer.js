import { Box, Grid, Stack, Typography, Button, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

// Icons
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Box sx={{
            backgroundColor: '#212121 !important',
            height: '100%',
            paddingLeft: {  xs: '5%', sm: '10%', md: '7%', lg: '6.5%', xl: '4.5%' },
            paddingRight: {  xs: '5%', sm: '10%', md: '7%', lg: '6.5%', xl: '4.5%' },
            paddingBottom: '1%',
            paddingTop: '1%',
        }}>
            <Grid container spacing={1}>
    
              <Grid item xs={12} sm={12} md={6}>
                <Box sx={{
                        width: '100%',
                        height: '100%',
                        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12) !important',
                        padding: '3%',
                        backgroundColor: '#282828',
                        border: '1px solid #343434',
                        borderRadius: '5px',
                    }}
                >
                    <Stack direction="column">
                        <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                            About us
                        </Typography>
                        <Box sx={{ width: 70 }}> 
                            <Divider sx={{ bgcolor: '#ff6d00', height: 2 }} />
                        </Box>
                        <Typography variant='paragraph' sx={{ color: 'white', textAlign: 'justify', mt: 1.5, fontSize: 15  }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. Officiis perferendis rem, aut aliquam.
                        </Typography>
            
                        <Button 
                            variant="contained"
                            sx={{
                                mt:2,
                                color: 'rgba(0, 0, 0, 0.87)',
                                width: 130,
                                bgcolor: '#ff9100', 
                                boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)', 
                                textTransform: 'capitalize',
                                textWeight: 'bold',
                                '&:hover': { 
                                    bgcolor: '#ff6d00',
                                    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'
                                } 
                            }}
                        >
                        Contact Us
                        </Button>
            
                    </Stack>
                </Box>
              </Grid>
    
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{
                        width: '100%',
                        height: '100%',
                        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12) !important',
                        padding: '3%',
                        backgroundColor: '#282828',
                        border: '1px solid #343434',
                        borderRadius: '5px',
                    }}
                >
                    <Stack direction="column">
                        <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 'bold', color: 'white', mt: 1.5 }}>
                            Contact Us
                        </Typography>
                        <Box sx={{ width: 70 }}> 
                            <Divider sx={{ bgcolor: '#ff6d00', height: 2 }} />
                        </Box>

                        <Box>
                            <List dense={true}>
                                <ListItem>
                                    <ListItemIcon>
                                        <EmailIcon sx={{ color: '#ff9100' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold' }}>
                                                Email
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2" sx={{ color: '#fff', mt: -1, fontWeight: 400 }}>
                                                xyz@gmail.com
                                            </Typography>
                                        }
                                        
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocationOnIcon sx={{ color: '#ff9100' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold' }}>
                                                Address
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="subtitle2" sx={{ color: '#fff', mt: -1, fontWeight: 400 }}>
                                                Topoban, Akhalia Sylhet 3114, BD
                                            </Typography>
                                        }
                                        
                                    />
                                </ListItem>
                            </List>
                        </Box>

                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{
                        width: '100%',
                        height: '100%',
                        boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12) !important',
                        padding: '3%',
                        backgroundColor: '#282828',
                        border: '1px solid #343434',
                        borderRadius: '5px',
                    }}
                >
                    <Stack direction="column">
                        <Typography variant='h6' sx={{ fontSize: 20, fontWeight: 'bold', color: 'white', mt: 1.5 }}>
                            Disclaimer
                        </Typography>
                        <Box sx={{ width: 70 }}> 
                            <Divider sx={{ bgcolor: '#ff6d00', height: 2 }} />
                        </Box>
                        <Typography variant='paragraph' sx={{ color: 'white', textAlign: 'justify', mt: 1.5, fontSize: 15  }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem,
                        </Typography>
                        <Stack spacing={3} direction="row"sx={{ mt: 1.5 }}>
                            <FacebookIcon sx={{ color: '#999999', height: 35, width: 35 }} />
                            <LinkedInIcon sx={{ color: '#999999', height: 35, width: 35 }} />
                            <TwitterIcon sx={{ color: '#999999', height: 35, width: 35 }} />
                        </Stack>
                    </Stack>
                </Box>
              </Grid>
    
            </Grid>
        </Box>
      )
}

export default Footer