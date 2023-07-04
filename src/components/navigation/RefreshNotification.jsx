import React, { useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useSnackbar } from 'notistack';

const JWT_REFRESH_INTERVAL = 0.5 * 60 * 1000; // 1 minutes

const RefreshNotification = () => {

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const refreshAccessToken = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `JWT ${Cookies.get("access_token")}`
                    }
                }
                const res = await axios.get("https://blog.enerlyticslab.com/api/notification/", config)
                Cookies.set('notification', JSON.stringify(res.data))
                // console.log(res.data)
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

export default RefreshNotification