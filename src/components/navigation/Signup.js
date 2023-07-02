import * as React from 'react';
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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    
      return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="md">
            {/* <CssBaseline /> */}
            <Box
              sx={{
                marginTop: 9.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  {/* user Name */}
                  <Grid item xs={12} md={4}>
                    <TextField
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="email"
                      autoComplete="username"
                    />
                  </Grid>
                  {/* Email */}
                  <Grid item xs={12} md={4}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  {/* password */}
                  <Grid item xs={12} md={4}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  {/* confirm password
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      name="confirm password"
                      label="Confirm password"
                      type="password"
                      id="confirm-password"
                      autoComplete="confirm-password"
                    />
                  </Grid> */}
                  {/* chatgpt key */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      name="APIkey"
                      label="Open AI API key"
                      id="apikey"
                      autoComplete="apiKey"
                    />
                  </Grid>
                  {/* blog url */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      name="blogURL"
                      label="Wordpress Blog URL"
                      id="blog-url"
                      autoComplete="blogurl"
                    />
                  </Grid>
                  {/* blog email */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      name="blogURLemail"
                      label="Wordpress Blog Email Address"
                      id="blog-email"
                      autoComplete="blog-email"
                    />
                  </Grid>
                  {/* blog password */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      name="blogURLpass"
                      label="Wordpress Blog Password"
                      id="blog-pass"
                      autoComplete="blog-pass"
                    />
                  </Grid>
                  {/* Remember */}
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>

                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
    );
}

export default Signup