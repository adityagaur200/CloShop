import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {useNavigate } from 'react-router-dom'

const ProductCard = () => {
  
  return (
    <Box onClick={()=>navigate('/product/')}>
    <Box>
      <img src='ExampleImage.jpg' style={{width:"270px",height:"350px",overflow:"hidden", cursor:"pointer"}}/>
    </Box>
        <Stack mt={1} mb={1} ml={1} sx={{cursor:"pointer"}}>
      <Typography fontSize={14} fontFamily={'sans-serif'}>
          Night Sky
      </Typography>
      <Typography >
        799
      </Typography>
    </Stack>
    </Box>
  )
}

export default ProductCard
