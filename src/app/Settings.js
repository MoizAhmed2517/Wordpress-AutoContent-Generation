import { useState, useContext } from 'react';
import profileImage from '../static/images/profilepic.png'
import SaveIcon from '@mui/icons-material/Save';

// Material UI components
import { Box, Stack, Grid, IconButton, TextField, Tooltip, Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import DragDrop from '../components/miscellaneous/DragDrop';

const Settings = () => {
    const [disableConfirm, setDisableConfirm] = useState(true);
    const [disableConfirmWP, setDisableConfirmWP] = useState(true);
    const [imageData, setImageData] = useState(null);

    const handleImageUpload = (data) => {
        setImageData(data);
    };

    // console.log(loginData);

    const handlePassword = (event) => {
      setDisableConfirm(false);
      console.log(event.target.value);
    }

    const handlePasswordWP = (event) => {
        setDisableConfirmWP(false);
        console.log(event.target.value);
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
                                    src={imageData !== null ? imageData : profileImage}
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
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField fullWidth variant='standard' placeholder="Username" label="Username" defaultValue={"John"} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField fullWidth variant='standard' placeholder="xyz@gmail.com" label="Email" defaultValue={'johndesouza@xysmail.com'} />
                        </Grid>
                        {/* <Grid item xs={12} sm={6} md={4}>
                            <TextField fullWidth variant='standard' label="Change Password" defaultValue={'xyz@gmail.com'} type='password' onChange={handlePassword} />
                        </Grid> */}
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField fullWidth variant='standard' label="Password" type='password' />
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
                            <TextField fullWidth variant='standard' placeholder="Blog url" label="Wordrpress blog URL" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField fullWidth variant='standard' placeholder="Wordpress User" label="email" defaultValue={"abc@climatebiz.com"} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField fullWidth variant='standard' label="Wordpress Key" defaultValue={'xyz@gmail.com'} type='password' onChange={handlePasswordWP} />
                        </Grid>
                        {/* <Grid item xs={12} sm={6} md={4}>
                            <TextField fullWidth variant='standard' label="Confirm Password" type='password' disabled={disableConfirmWP} />
                        </Grid> */}

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
                            <TextField fullWidth variant='standard' placeholder="Place API endpoint here" label="API key" />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                            <Button endIcon={<SaveIcon />} fullWidth variant='contained' sx={{ mt: 2 }}>Save</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Box>
    )
}

export default Settings