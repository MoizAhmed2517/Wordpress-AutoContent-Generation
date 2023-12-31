import React from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { useSnackbar } from 'notistack';
// Icons
import SourceIcon from '@mui/icons-material/Source';
import SendIcon from '@mui/icons-material/Send';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Material UI components
import { Box, Stack, Grid, IconButton, TextField, Tooltip, Button, Typography, CircularProgress } from '@mui/material';
import TextEditor from '../components/editor/TextEditor';
import DropDown from '../components/miscellaneous/DropDown';
import Confirmation from '../components/modal/Confirmation';

const options = [
]

const Home = () => {

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [dropDownValue, setDropDownValue] = React.useState('');
  const [prompt, setPrompt] = React.useState('');
  const [promptResponse, setPromptResponse] = React.useState('Hey! I am a dummy text. You can generate text or type any topic of your choice. The fun part is that you can tune it as you need.');
  const [isPending, setIsPending] = React.useState(false);
  const [blogHeading, setBlogHeading] = React.useState('');
  const [blogList, setBlogList] = React.useState([]);
  const [htmlContent, setHtmlContent] = React.useState('')
  const [color, setColor] = React.useState("primary")
  const [blog, setBlog] = React.useState([]);

  const { enqueueSnakbar } = useSnackbar()

  React.useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
            Authorization: `JWT ${Cookies.get("access_token")}`
        }
      }
      try {
        const res = await axios.get("https://blog.enerlyticslab.com/api/wp-topic/", config)
        const options = Object.entries(res.data).map(([key, value]) => ({
          label: value
        }));
        setBlogList(options)
      } catch (err) {
        enqueueSnakbar(err);
      }
    }
    fetchData();
  },[]);

  const handleConfirmOpen = async () => {
    setOpenConfirm(true);
    const config = {
      headers: {
          Authorization: `JWT ${Cookies.get("access_token")}`
      }
    }
    try {
      const res = await axios.get("https://blog.enerlyticslab.com/api/wp-topic/", config)
      setBlog(res.data)
    } catch (err) {
      enqueueSnakbar(err);
    }
  };

  const handleConfirmClose = () => {
    setOpenConfirm(false);
  };

  const handleGenerateContent = async () => {
    setColor("primary");
    const item = {
      prompt: prompt
    }

    try {
      const config = {
        headers: {
            Authorization: `JWT ${Cookies.get("access_token")}`
        }
      }
      setIsPending(true)
      const res = await axios.post("https://blog.enerlyticslab.com/api/generate-content/", item, config);
      setIsPending(false);
      let text = res.data.trim().replace(/^\n+/, '')
      setPromptResponse(text);
    } catch (error) {
      setColor("error");
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
                            Welcome to BlogBot - Power up your blogs with AI 
                        </Typography>
                        <Tooltip title={"In this tab you can generate lot of AI content and using single can post it to your deired blog and its topic"} placement='bottom-end'>
                          <InfoOutlinedIcon sx={{ pt: 0.5, color: 'rgba(0,0,0,0.5)' }} />
                        </Tooltip>
                      </Stack>

                  </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={8}>
                  <TextField fullWidth variant='outlined' placeholder="Write more details" label="Looking to write something special" onChange={(event) => setPrompt(event.target.value)} />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>

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
                            color={color} 
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
                  <Box sx={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    minHeight: '230px'
                  }}>
                    <TextEditor content={promptResponse} htmlContent={setHtmlContent} />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <DropDown data={blogList} label="Topic" placeholder="Select your topic" valueSet={setDropDownValue} />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <TextField fullWidth variant='outlined' placeholder="Write blog heading" label="Blog Heading" onChange={(event) => setBlogHeading(event.target.value)} />
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
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
                    onClick={handleConfirmOpen}
                  >
                    Post
                  </Button>
                </Grid>

                <Confirmation openModal={openConfirm} handleClose={handleConfirmClose} setOpen={setOpenConfirm} blogData={blog} dropValue={dropDownValue} title={blogHeading} response={htmlContent}  />

              </Grid>
            </Box>
                
        </Stack>
    </Box>
    )
}

export default Home