import React from 'react'
import { Box,Typography,Button} from '@mui/material';
import HeroBannerImage from "../assets/images/banner.jpg";
const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:"212px",xs:"70px"},
              ml:{sm:"50px"},bgcolor:"#00CED1"}}  p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:"44px",xs:"40px"}}} mt="30px" mb="20px">Sweat,Smile<br/>Repeat</Typography>
        <Typography fontSize="22px"lineHeight="35px" mb={4}>Check Out The Most Effective Exercises</Typography>
        <Button variant='contained'color='error' href='#exercises'sx={{backgroundColor:"ff2625",padding:"10px"}}>Explore Exercises</Button>
        <Typography fontWeight={600} color="#ff2625" sx={{opacity:0.5,display:{lg:"block",xs:"none"}}} fontSize="200px">Exercise</Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner;