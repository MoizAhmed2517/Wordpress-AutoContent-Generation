import React from 'react'
import countryList  from 'react-select-country-list';
import { useSnackbar } from 'notistack';
import Cookies from 'js-cookie';
// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SourceIcon from '@mui/icons-material/Source';

// Material UI components
import { Box, Stack, Grid, IconButton, TextField, Tooltip, Button, Typography, Card, CardContent, CircularProgress } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import MDTableGridTopic from '../components/tables/MDTableGridTopic';
import axios from 'axios';

const TrendingTopic = () => {

    const [selectCountry, setSelectCountry] = React.useState('');
    const [selectTopic, setSelectTopic] = React.useState('');
    const [options, setOptions] = React.useState([]);
    const [isPending, setIsPending] = React.useState(false);
    const [content, setContent] = React.useState({});

    const { enqueueSnackbar } = useSnackbar();

    const country = React.useMemo(() => {
        const options = countryList().getData();
        const usaOption = options.find(option => option.value === 'US');
        const otherOptions = options.filter(option => option.value !== 'US').sort((a, b) => a.label.localeCompare(b.label));
        return [usaOption, ...otherOptions];
    }, [])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `JWT ${Cookies.get("access_token")}`
                    }
                }
                const res = await axios.get("https://blog.enerlyticslab.com/api/topics/", config);
                const newOptions = res.data.map(item => {
                    const article = item.topic_name + " - " + item.sub_topic
                    return {
                        label: article
                    }
                })
                setOptions(newOptions);
            } catch (e) {
                console.log(e)
            }
        }
        fetchData();
    },[])

    const handleGenerateContent = async (variant="error") => {
        const item = {
            country: selectCountry.label,
            topic: selectTopic.label,
        }
    
        try {
            const config = {
                headers: {
                    Authorization: `JWT ${Cookies.get("access_token")}`
                }
            }
            setIsPending(true)
            const res = await axios.post("https://blog.enerlyticslab.com/api/generate-trending-topic/", item, config);
            setIsPending(false);
            setContent(res.data);
        } catch (error) {
            enqueueSnackbar(error, { variant });
            setIsPending(false);
        }

    }

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
                                Welcome to BlogBot's Trending Topic Section ! 
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
                            options={options}
                            renderInput={(params) => <TextField {...params} label="Select Topic" />}
                            onChange={(event, value) => setSelectTopic(value)}
                        />

                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
                            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                                <Button
                                    endIcon={isPending ? "" : <SourceIcon />}
                                    fullWidth
                                    variant='contained'
                                    size="large"
                                    sx={{
                                    height: '100%',
                                    width: '100%',
                                    bgcolor: '#ff9100',
                                    '&:hover': {
                                        bgcolor: '#ff6d00',
                                        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
                                    }
                                    }}
                                    onClick={handleGenerateContent}
                                    disabled={isPending}
                                > 
                                    { isPending ? (
                                    <CircularProgress 
                                        size={24}
                                        sx={{
                                        color: '#fff',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-12px',
                                        marginLeft: '-12px',
                                        }}
                                    />
                                    ) : "Generate"
                                    }
                                </Button>
                            </Box>
                        </Box>
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
                            <CardContent sx={{ mt: -2.5 }}><MDTableGridTopic context={content} /></CardContent>
                        </Card>
                    </Grid>

                </Grid>
                </Box>
                    
            </Stack>
        </Box>
    )
}

export default TrendingTopic