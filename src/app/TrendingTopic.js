import React from 'react'
import countryList  from 'react-select-country-list';

// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Material UI components
import { Box, Stack, Grid, IconButton, TextField, Tooltip, Button, Typography, Card, CardContent } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import MDTableGridTopic from '../components/tables/MDTableGridTopic';

const TrendingTopic = () => {

    const [selectCountry, setSelectCountry] = React.useState('');
    const country = React.useMemo(() => countryList ().getData(), [])

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
                                Welcome to BlogBot's Tredning Topic Section ! 
                            </Typography>
                            <Tooltip title={"In this tab you can select the trending topic based on the topic and can generate article"} placement='bottom-end'>
                            <InfoOutlinedIcon sx={{ pt: 0.5, color: 'rgba(0,0,0,0.5)' }} />
                            </Tooltip>
                        </Stack>

                    </Box>
                    </Grid>

                    <Grid item xs={12} md={5}>

                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={country}
                            renderInput={(params) => <TextField {...params} label="Select Country" />}
                            onChange={(event, value) => setSelectCountry(value)}
                        />

                    </Grid>

                    <Grid item xs={12} md={5}>

                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={country}
                            renderInput={(params) => <TextField {...params} label="Select Topic" />}
                            onChange={(event, value) => setSelectCountry(value)}
                        />

                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Button 
                            variant='contained' 
                            fullWidth 
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
                        <Card sx={{
                            minHeight: '100px',
                        }}>
                            <CardContent>
                                <Stack direction="row" spacing={1}>
                                    <Typography variant="h6" sx={{ mt: -0.5, color: "rgba(0,0,0,0.8)" }}>Trending Topics</Typography>
                                    <TrendingUpIcon sx={{ color: "rgba(0,0,0,0.8)" }} />
                                </Stack>
                            </CardContent>
                            <CardContent sx={{ mt: -2.5 }}><MDTableGridTopic /></CardContent>
                        </Card>
                    </Grid>

                </Grid>
                </Box>
                    
            </Stack>
        </Box>
    )
}

export default TrendingTopic