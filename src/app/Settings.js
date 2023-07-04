import { useState, useContext } from 'react';
import profileImage from '../static/images/profilepic.png'
import SaveIcon from '@mui/icons-material/Save';
import Cookies from 'js-cookie';
// Material UI components
import { Box, Stack, Grid, IconButton, TextField, Tooltip, Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import DragDrop from '../components/miscellaneous/DragDrop';
import { useTheme } from '@emotion/react';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const Settings = () => {
    const [disableConfirm, setDisableConfirm] = useState(true);
    const [disableConfirmWP, setDisableConfirmWP] = useState(true);
    const [imageData, setImageData] = useState(null);
    const userInfo = JSON.parse(Cookies.get("Info"))
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [blogUrl, setBlogUrl] = useState('');
    const [wpUser, setWPUser] = useState('');
    const [wpKey, setWPKey] = useState('');
    const [apiKey, setAPIKey] = useState('');

    const {enqueueSnackbar} = useSnackbar()

    const handleImageUpload = (data) => {
        setImageData(data);
    };

    const handlePassword = (event) => {
      setDisableConfirm(false);
      console.log(event.target.value);
    }

    const handlePasswordWP = (event) => {
        setDisableConfirmWP(false);
        console.log(event.target.value);
      }

    const handleSaveChnages = async() => {
        const item = {
            first_name: firstName || userInfo.first_name,
            last_name: lastName || userInfo.last_name,
            // username: userName || userInfo.username,
            email: email || userInfo.email,
            url: blogUrl || userInfo.url,
            wp_user: wpUser || userInfo.wp_user,
            wp_key: wpKey || userInfo.wp_key,
            chatgpt_key: apiKey || userInfo.chatgpt_key
        }
        const config = {
            headers: {
                Authorization: `JWT ${Cookies.get("access_token")}`
            }
        }
        try {
            const res = await axios.put("https://blog.enerlyticslab.com/auth/users/me/", item, config)
            console.log(res.data)

        } catch (e) {
            enqueueSnackbar(e)
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
                        
                        {/* Personal information */}
                        <Grid item xs={12} sx={{ mb : 2 }}>
                            <Box sx={{
                                backgroundColor : "#fbfbfb",
                                paddingTop: '2%',
                                paddingBottom: '2%',
                                paddingLeft: '1%',
                                borderRadius: '5px',
                                border: '1px solid #c7c7c7'
                            }}>
                            <Typography variant='button' sx={{ color: 'rgba(0,0,0,0.5)', fontWeight: 'bold' }}>
                                Personal Information
                            </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <Tooltip title="Upload your avatar">
                                <IconButton >
                                    <Avatar
                                    alt="Remy Sharp"
                                    src={imageData !== null ? imageData : userInfo.image !== "" ? profileImage : userInfo.image}
                                    sx={{ 
                                        width: 200, 
                                        height: 200,
                                        position: 'relative',
                                    }}
                                    >
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8} sx={{ mt: 2.5 }}>
                            <DragDrop onImageUpload={handleImageUpload} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField fullWidth variant='standard' placeholder="First name" label="First name" defaultValue={userInfo.first_name} onChange={(e) => setFirstName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField fullWidth variant='standard' placeholder="Last name" label="Last name" defaultValue={userInfo.last_name} onChange={(e) => setLastName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField fullWidth variant='standard' placeholder="Username" label="Username" defaultValue={"test"} onChange={(e) => setUserName(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField fullWidth variant='standard' placeholder="xyz@gmail.com" label="Email" defaultValue={userInfo.email} onChange={(e) => setEmail(e.target.value)} />
                        </Grid>

                        {/* Wordpress credentials */}
                        <Grid item xs={12} sx={{ mt: 4, mb : 1 }}>
                            <Box sx={{
                                backgroundColor : "#fbfbfb",
                                paddingTop: '2%',
                                paddingBottom: '2%',
                                paddingLeft: '1%',
                                borderRadius: '5px',
                                border: '1px solid #c7c7c7'
                            }}>
                                <Typography variant='button' sx={{ color: 'rgba(0,0,0,0.5)', fontWeight: 'bold' }}>
                                    WordPress Blog Credentials
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField fullWidth variant='standard' placeholder="Blog url" label="Wordrpress blog URL" defaultValue={userInfo.url} onChange={(e) => setBlogUrl(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField fullWidth variant='standard' placeholder="Wordpress User" label="Wordpress User" defaultValue={userInfo.wp_user} onChange={(e) => setWPUser(e.target.value)} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField fullWidth variant='standard' label="Wordpress Key" defaultValue={userInfo.wp_key} onChange={(e) => setWPKey(e.target.value)} />
                        </Grid>

                        {/* CHATGPT credentials */}
                        <Grid item xs={12} sx={{ mt: 4, mb : 1 }}>
                            <Box sx={{
                                backgroundColor : "#fbfbfb",
                                paddingTop: '2%',
                                paddingBottom: '2%',
                                paddingLeft: '1%',
                                borderRadius: '5px',
                                border: '1px solid #c7c7c7'
                            }}>
                                <Typography variant='button' sx={{ color: 'rgba(0,0,0,0.5)', fontWeight: 'bold' }}>
                                    ChatGPT API Credentials
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField fullWidth variant='standard' placeholder="Place API endpoint here" label="API key" defaultValue={userInfo.chatgpt_key} onChange={(e) => setAPIKey(e.target.value)} />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Button endIcon={<SaveIcon />} fullWidth variant='contained' sx={{ mt: 2 }} onClick={handleSaveChnages}>Save</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Box>
    )
}

export default Settings