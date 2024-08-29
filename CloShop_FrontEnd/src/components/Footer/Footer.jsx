import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <Box width={"100%"}>
       <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} gap={2}>
            <Stack direction={'row'} gap={4} justifyContent={'center'}>
                <FaFacebook size={30}/>
                <FaGoogle size={30}/>
                <FaXTwitter size={30}/>
                <FaPinterest size={30}/>
            </Stack> 
            <Typography fontStyle={'bold'} justifyContent={'center'}>
                Made in India
            </Typography>    
       </Stack>
    </Box>
  )
}

export default Footer