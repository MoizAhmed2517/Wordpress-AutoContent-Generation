import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';

const JWT_REFRESH_INTERVAL = 1.5 * 60 * 1000; // 2 minutes

const RefreshToken = () => {

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const refreshAccessToken = async () => {
            try {
                const response = await axios.post('https://blog.enerlyticslab.com/auth/jwt/refresh', {
                    refresh: Cookies.get("referesh_token")
                });
                Cookies.set('access_token', response.data.access);
            } catch (error) {
                enqueueSnackbar(error);
            }
    };
    const intervalId = setInterval(refreshAccessToken, JWT_REFRESH_INTERVAL);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    </>
  )
}

export default RefreshToken