import React from 'react'

// Icons
import SourceIcon from '@mui/icons-material/Source';
import SendIcon from '@mui/icons-material/Send';

// Material UI components
import { Box, Stack, Grid, IconButton, TextField, Tooltip, Button, Typography } from '@mui/material';
import TextEditor from '../components/editor/TextEditor';
import DropDown from '../components/miscellaneous/DropDown';

const population = [
  { population: 'Energy' },
  { population: 'Ai' },
  { population: 'Project Management' },
  { population: 'End of World' }
];

const Home = () => {
  return (
    <Box sx={{ flexGrow: 0, p: 0.5, marginLeft: 8, marginTop: 2.5  }}>
        <Stack>
            <Box sx={{
                margin: {
                        xs: "10px 100px -10px 10px",
                        sm: "10px 100px -10px 10px",
                        md: '40px 100px 10px 20px'
                    }     
                }}
            >

              <Grid container spacing={2}>

                <Grid item xs={12} sx={{ mb: 4 }}>

                  <Box sx={{
                            backgroundColor : "#fbfbfb",
                            paddingTop: '2%',
                            paddingBottom: '2%',
                            paddingLeft: '1%',
                            borderRadius: '5px',
                            border: '1px solid #c7c7c7'
                  }}>
                    <Typography variant="h5" sx={{
                            // textShadow: '0 4px 4px rgba(0, 0, 0, 0.22)',
                            color: 'rgba(0,0,0,0.6) !important',
                            lineHeight: 1.1,
                            fontWeight: {xs: 500 , md:'bold'},
                            textAlign: 'center',
                        }}
                    >
                        Welcome to BlogBot! Generate your new blog :)
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={8}>
                  <TextField fullWidth variant='outlined' placeholder="Write more details" label="Looking to write something special" />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                  <Button
                    startIcon={<SourceIcon />}
                    fullWidth
                    variant='contained'
                    size="large"
                    sx={{
                      height: '100%',
                      bgcolor: '#ff9100',
                      '&:hover': {
                        bgcolor: '#ff6d00',
                        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
                      }
                    }}
                  > 
                  Generate
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                  }}>
                    <TextEditor />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <DropDown data={population} label="Topic" placeholder="Select your topic" />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <Button 
                    endIcon={<SendIcon />} 
                    fullWidth 
                    variant='contained'
                    sx={{
                      height: '100%',
                      bgcolor: '#ff9100',
                      '&:hover': {
                        bgcolor: '#ff6d00',
                        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
                      }
                    }}
                  >
                    Post
                  </Button>
                </Grid>

                

              </Grid>

            </Box>
                
        </Stack>
    </Box>
    )
}

export default Home