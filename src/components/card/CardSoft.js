import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';


const CardSoft = (props) => {
    return (
        <Card sx={{ 
            maxWidth: 250, 
            borderRadius: '8px', 
            mb: 4, 
            boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
            transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.03)',
                    transition: 'transform 0.3s ease-in',
                    boxShadow: "0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)",
                },
                '&:hover:not(:hover)': {
                    transform: 'scale(1)',
                },
        }}
        >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2.5, mb: 2 }}>
                
                <Box sx={{
                    height: 50,
                    width: 50,
                    border: '3px solid #ff9100',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffeed8',
                    }}
                >
                    {props.icon}
                </Box>
                
                <Typography variant='button' sx={{ fontSize: 14, mt: 2, fontWeight: 510 }} color="text.secondary" gutterBottom>
                {props.text}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardSoft;
