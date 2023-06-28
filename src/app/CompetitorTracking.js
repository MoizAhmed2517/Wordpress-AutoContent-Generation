import React from 'react'
import axios from 'axios';

// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';

// Material UI components
import { Box, Stack, Grid, IconButton, TextField, Tooltip, Button, Typography, Card, CardContent } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import MDTableGridTrack from '../components/tables/MDTableGridTrack';
import MDTableGridList from '../components/tables/MDTableGridList';
import AddNewUser from '../components/modal/AddNewUser';

const CompetitorTracking = () => {


    const [openConfirm, setOpenConfirm] = React.useState(false);

    // APIs

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://mujtabatasneem.pythonanywhere.com/api/competitors/');
            console.log(response.data);
            // Handle the response data
          } catch (error) {
            console.error(error);
            // Handle the error
          }
        };
    
        fetchData();
      }, []);

    const handleConfirmOpen = () => {
        setOpenConfirm(true);
    };

    const handleConfirmClose = () => {
        setOpenConfirm(false);
    };

    return (
        <Box sx={{ flexGrow: 0, p: 0.5, marginLeft: 8  }}>
            <Stack>
                <Box sx={{
                    margin: {
                            xs: "10px 100px -10px 10px",
                            sm: "10px 100px -10px 10px",
                            md: '-30px 40px 10px 40px'
                        }     
                    }}
                >
                <Grid container spacing={2}>

                    <Grid item xs={12} sx={{ mb: 2 }}>
                    <Box sx={{
                            backgroundColor : "#fbfbfb",
                            paddingTop: '2%',
                            paddingBottom: '2%',
                            paddingLeft: '1%',
                            borderRadius: '5px',
                            border: '1px solid #c7c7c7'
                        }}>
                        

                        <Stack direction="row" spacing={1}>
                            <Typography variant='button' sx={{ color: 'rgba(0,0,0,0.5)', fontWeight: 'bold', fontSize: 18 }}>
                                Welcome to BlogBot's Competitor Tracking Section ! 
                            </Typography>
                            <Tooltip title={"In this tab you can select the trending topic based on the topic and can generate article"} placement='bottom-end'>
                            <InfoOutlinedIcon sx={{ pt: 0.5, color: 'rgba(0,0,0,0.5)' }} />
                            </Tooltip>
                        </Stack>

                    </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Card sx={{
                            minHeight: '100px',
                        }}>
                            <CardContent>
                                <Typography variant="h6" sx={{ mt: 0.3,color: "rgba(0,0,0,0.8)" }}>Competitor Latest Blogs</Typography>
                            </CardContent>
                            <CardContent sx={{ mt: -2.5 }}><MDTableGridTrack /></CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card sx={{
                            minHeight: '100px',
                        }}>
                            <CardContent>
                                <Stack direction="row" spacing={1}>
                                    <Typography variant="h6" sx={{ mt: 0.3,color: "rgba(0,0,0,0.8)" }}>Competitor List</Typography>
                                    <Tooltip title="Add New Competitor">
                                        <IconButton onClick={handleConfirmOpen}>
                                            <AddBoxIcon sx={{ color: "#ff9100" }} />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                                
                            </CardContent>
                            <CardContent sx={{ mt: -2.5 }}><MDTableGridList /></CardContent>
                        </Card>
                    </Grid>

                </Grid>
                </Box>

                <AddNewUser openModal={openConfirm} handleClose={handleConfirmClose} setOpen={setOpenConfirm} />
                    
            </Stack>
        </Box>
    )
}

export default CompetitorTracking