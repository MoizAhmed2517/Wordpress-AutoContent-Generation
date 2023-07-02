import React, { createContext } from 'react';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
// Mui component
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function createData(id, userType, email, password) {
    return {id, userType, email, password};
  }
  
const dummyUsers = [
createData( 1, 'admin', 'Admin', '123455'),
createData( 2, 'user', 'User', '123456'),
];

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Blogbot.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Login = () => {
    const navigate  = useNavigate();
    const [credentials, setCredentials] = React.useState("");
    const [access, setAccess] = React.useState(false);
    const [loginData, setLoginData] = React.useState({});

    const { enqueueSnackbar } = useSnackbar();
  
    React.useEffect(() => {
      dummyUsers.map(item => {
          if(item.email === credentials.email && item.password === credentials.password) {
              navigate('/home');
          }
      })
    }, [credentials])
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const item = {
        username: data.get('email'),
        password: data.get("password"),
      }

      try {
        const res = await axios.post("http://mujtabatasneem.pythonanywhere.com/auth/jwt/create/", item)
        Cookies.set("referesh_token", res.data.refresh)
        Cookies.set("access_token", res.data.access)

        if (res.data.access) {
          axios.get("http://mujtabatasneem.pythonanywhere.com/auth/users/me/", {
            headers: {
              Authorization: `JWT ${Cookies.get("access_token")}`
            }
          })
          .then(response =>{
            Cookies.set("Info", response.data)
            navigate('/home')
          }).catch(err =>{
            enqueueSnackbar(err)
          })
        }

      } catch (err) {
        console.log(err);
      }
      setCredentials({
        email: data.get('email'),
        password: data.get('password'),
      });

    };
  
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
}

export default Login