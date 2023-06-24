import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Box } from '@mui/material'
import Banner from '../components/banner/Banner'
import CardContent from './CardContent'
import TabSlider from './TabSlider'
import BusinessCard from './BusinessCard'
import InfoBanner from './InfoBanner'
import Footer from '../components/footer/Footer'

const Landing = () => {
  return (
    <Box>
        <Navbar />
        <Banner />
        <CardContent />
        <BusinessCard />
        <TabSlider />
        <InfoBanner />
        <Footer />
    </Box>
  )
}

export default Landing