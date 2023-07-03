import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
// Icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

// Material UI components
import { Box, Stack, Grid, IconButton, TextField, Tooltip, Button, Typography, Autocomplete } from '@mui/material';
import MDTableGridTopicList from '../components/tables/MDTableGridTopicList';

const BlogTopic = () => {

    const [ topic, setTopic ] = React.useState("");
    const [ subTopic, setSubTopic ] = React.useState("")

    const handleAddTopic = async () => {
        const item = {
            "topic_name": topic,
            "sub_topic": subTopic || "None",
        }

        try {
            const config = {
                headers: {
                    Authorization: `JWT ${Cookies.get("access_token")}`
                }
            }
            const res = await axios.post("https://blog.enerlyticslab.com/api/topics/ ", item, config);
            setTopic("")
            setSubTopic("")
            console.log(res);
            window.location.reload(false);
          } catch (error) {
            console.error(error);
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
                                Welcome to BlogBot - Add new topic to power your blogs
                            </Typography>
                            <Tooltip title={"In this tab you can add as many topics you like"} placement='bottom-end'>
                            <InfoOutlinedIcon sx={{ pt: 0.5, color: 'rgba(0,0,0,0.5)' }} />
                            </Tooltip>
                        </Stack>

                    </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TextField fullWidth variant="outlined" label="Topic" placeholder="Write main topic" onChange={(e) => setTopic(e.target.value)}  />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <TextField fullWidth variant="outlined" label="Sub Topic" placeholder="Write any sub-topic" onChange={(e) => setSubTopic(e.target.value)}  />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Button 
                            endIcon={<AddTaskOutlinedIcon />} 
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
                            onClick={handleAddTopic}
                        >
                            ADD
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <MDTableGridTopicList />
                    </Grid>

                </Grid>
                </Box>
                    
            </Stack>
        </Box>
    )
}

export default BlogTopic