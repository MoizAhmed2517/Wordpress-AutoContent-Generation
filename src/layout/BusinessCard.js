import { Box, Typography, Stack, Grid } from '@mui/material'
import React from 'react'

// Icons
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ShapeLineOutlinedIcon from '@mui/icons-material/ShapeLineOutlined';
import AltRouteOutlinedIcon from '@mui/icons-material/AltRouteOutlined';
import ConnectedTvOutlinedIcon from '@mui/icons-material/ConnectedTvOutlined';

// components
import CardHoverIcon from '../components/card/CardHoverIcon'

const BusinessCard = () => {
  return (
    <Box sx={{
        backgroundColor: 'rgba(255, 255, 255, 1) !important',
        height: '100%',
        paddingLeft: {  xs: '5%', sm: '10%', md: '7%', lg: '6.5%', xl: '4.5%' },
        paddingRight: '10%',
        paddingBottom: '6%',
    }}>

        <Stack direction="column" sx={{ pt: 10 }}>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                Grow Your Business
            </Typography>
            <Typography variant='subtitle2' sx={{ color: 'rgba(0, 0, 0, 0.6)', mb: 1.5, mt: 1 }}>
                Access integrations and new features in a matter of seconds
            </Typography>

            <Box sx={{
                mt: 4,
                paddingLeft: '10%',
                paddingRight: '10%',
            }}>

                <Grid container spacing={20}>
                    <Grid item xs={12} md={3}>
                        <CardHoverIcon icon={<ContentPasteIcon sx={{ height: 64, width: 64 }} />} text="Generate Content" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardHoverIcon icon={<ShapeLineOutlinedIcon sx={{ height: 64, width: 64 }} />} text="Auto post content" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardHoverIcon icon={<AltRouteOutlinedIcon sx={{ height: 64, width: 64 }} />} text="Track competitor" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <CardHoverIcon icon={<ConnectedTvOutlinedIcon sx={{ height: 64, width: 64 }} />} text="Trending Topic" />
                    </Grid>
                </Grid>

            </Box>

        </Stack>



    </Box>
  )
}

export default BusinessCard