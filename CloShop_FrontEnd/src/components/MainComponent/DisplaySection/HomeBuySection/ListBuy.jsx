import React from 'react'
import {Stack , Box ,Button, Typography} from "@mui/material"
import ProductCard from './ProductCard/ProductCard'

const ListBuy = (props) => {
  const{Heading} = props;
  return (
    <Stack direction={'column'} gap={2} justifyContent={'center'} alignItems={'center'} mb={4}>
      <Typography fontWeight={"bold"} fontSize={30}>
        {Heading}
      </Typography>
      <Stack direction={'row'} alignItems={'center'} gap={2} justifyContent={'center'}> 
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Stack>
      <Box>
      <Button variant='outlined'>View All</Button>
      </Box>
    </Stack>
    
    )
}

export default ListBuy
