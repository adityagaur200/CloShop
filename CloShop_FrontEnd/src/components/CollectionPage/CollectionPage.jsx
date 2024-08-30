import React from 'react'

import ProductCard from '../MainComponent/DisplaySection/HomeBuySection/ProductCard/ProductCard'
import { Box } from '@mui/material'
import Header from '../Header/Header'
const CollectionPage = () => {
  return (
   <> 
    <Header/>
    <Box sx={{ display: 'grid',gridTemplateColumns: 'repeat(4, 1fr)',gap: 2,padding: 2,}}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </Box>
    </>
  )
}

export default CollectionPage
