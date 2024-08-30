import React from 'react'
import DescriptionPart from './DescriptionPart'
import ImagePart from './ImagePart'
import { Box } from '@mui/material'
import {useNavigate } from 'react-router-dom'

const ProductCard = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={()=>navigate('/product')}>
        <ImagePart/>
        <DescriptionPart/>
    </Box>
  )
}

export default ProductCard
