import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';

const CardHoverIcon = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Card sx={{ 
                width: 150,
                height: 150, 
                borderRadius: '50%',
                mt: 2,
                mb: 2,
                boxShadow: "none",
                transition: 'transform 0.3s ease',
                    '&:hover': {
                        width: 150,
                        height: 150,
                        transform: 'scale(1.03)',
                        transition: 'transform 0.25s ease-in-out',
                        boxShadow: "0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)",
                        color: '#3f51b5',
                    },
                    '&:hover:not(:hover)': {
                        transform: 'scale(1)',
                    },
            }}
            >
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
                    {props.icon}
                </CardContent>
            </Card>
            <Typography variant='button' sx={{ textAlign: 'center', fontSize: 14, color: 'rgba(0, 0, 0, 0.6)' }}>
                {props.text}
            </Typography>
        </Box>
    );
}

export default CardHoverIcon