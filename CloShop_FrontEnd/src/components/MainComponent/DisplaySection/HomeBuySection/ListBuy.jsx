import React from 'react'
import {Stack , Box} from "@mui/icons-material"
import ProductCard from './ProductCard/ProductCard'

const ListBuy = () => {
  return (

    <Box width={"100%"}>
    <Stack direction={'column'} alignItems={'center'} gap={2} justifyContent={'center'}> 
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </Stack>
    </Box>
    )
}

export default ListBuy
