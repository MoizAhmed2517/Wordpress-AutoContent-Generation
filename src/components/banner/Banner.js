import React from 'react';

// Icons
import DoneIcon from '@mui/icons-material/Done';

// Material UI components
import { Grid, Box, Typography, List, ListItem, ListItemText, ListItemIcon, TextField, InputAdornment, Button  } from '@mui/material';

// Images
import bannerImg from  '../../static/images/2.svg'


const generate = [
    'Unlimited Autoposting',
    'Unlimited content generation',
    'Automatic competitor blog checker'
]

const Banner = () => {

  const [dense, setDense] = React.useState(false);

  return (
    <Box sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.25) !important',
        height: '600px',
        paddingLeft: {  xs: '5%', sm: '10%', md: '7%', lg: '6.5%', xl: '4.5%' },
        paddingRight: '10%',
        }}
    >

        <Grid container>
            <Grid item xs={12} md={6}>

                <Typography variant="h3" sx={{
                        textShadow: '0 4px 4px rgba(0, 0, 0, 0.22)',
                        color: '#3f51b5 !important',
                        mb: '1.5rem',
                        mt: { xs: 8, lg: 10, xl: 18 },
                        lineHeight: 1.1,
                        fontWeight: {xs: 500 , md:'bold'},
                        textAlign: { xs: 'center', md: 'left' }
                        
                    }}
                >
                    Publish Your Ideas with a Single Click!
                </Typography>
                <Typography variant='h5' sx={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                    Not sure about Pro? Try trial first!
                </Typography>

                <Box sx={{ mt: 5, mb: 1 }}>
                    <List dense={dense}>
                        {generate.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <DoneIcon sx={{ color: '#ff9100' }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item}
                                    sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
                                />
                            </ListItem>
                        ))}
                        
                    </List>
                </Box>

                <TextField 
                    id="outlined-basic" 
                    placeholder='Your Email:'
                    variant="outlined"
                    fullWidth
                    sx={{ 
                        backgroundColor: '#ffff',

                        '& .MuiOutlinedInput-root': {
                            borderRadius: '50px',
                            '&.Mui-focused fieldset': {
                                borderColor: 'rgba(0, 0, 0, 0.87)',
                            }
                        },

                        // '& .MuiOutlinedInput-root': {
                        //     '&.Mui-focused fieldset': {
                        //         borderColor: 'transparent', // Change the border color when focused
                        //     }
                        // },
                    }}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button 
                                variant="contained"
                                startIcon={<DoneIcon />} 
                                sx={{ 
                                    borderRadius: '20px', 
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
                            Subscribe
                            </Button>
                          </InputAdornment>
                        ),
                    }}
                />

            </Grid>
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                <img src={bannerImg} alt="banner Image" style={{ maxWidth: '75%', height: 'auto', marginTop: '20%', }} />
            </Grid>
        </Grid>

    </Box>
  )
}

export default Banner