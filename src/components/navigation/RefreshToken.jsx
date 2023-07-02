import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const JWT_REFRESH_INTERVAL = 2 * 60 * 1000; // 4 minutes

const RefreshToken = () => {

    useEffect(() => {
        const refreshAccessToken = async () => {
            try {
                const response = await axios.post('https://mujtabatasneem.pythonanywhere.com/auth/jwt/refresh', {
                    refresh: Cookies.get("referesh_token")
                });
                Cookies.set('access_token', response.data.access);
            } catch (error) {
                console.error('Error refreshing access token', error);
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