import React from 'react'
import DescriptionPart from './DescriptionPart'
import ImagePart from './ImagePart'
import { Box } from '@mui/material'

const ProductCard = () => {
  return (
    <Box>
        <ImagePart/>
        <DescriptionPart/>
    </Box>
  )
}

export default ProductCard
