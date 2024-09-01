import QuantityInput from './Count'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartPopUp from '../Cart/CartPopUp'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const ProductPage = () =>
   {
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const [selectedImage, setSelectedImage] = useState('./ExampleImage.jpg');

    // Function to handle image change
    const handleImageChange = (event) => {
      // Set the selected image URL based on the clicked image's src
      setSelectedImage(event.target.src);
    };
    const handleCart =()=>
    {
      setIsCartOpen(!isCartOpen);
    }
  
    return (
      <>
      <Header/>
      <Stack direction={"row"} alignContent={'center'} justifyContent={'center'} mt={10}>
        <Box width={750} height={600}>
          <Stack direction={'row'} gap={15} ml={5}>
            <Stack direction={'column'} gap={2} mt={2}>
              <img 
                src="./ExampleImage.jpg" 
                style={{ width: "120px", height: "160px", cursor: 'pointer' }} 
                onClick={handleImageChange}
                alt="Thumbnail 1"
                cursor="pointer"
              />
              <img 
                src="./ExampleImage.jpg" 
                style={{ width: "120px", height: "160px", cursor: 'pointer' }} 
                onClick={handleImageChange}
                alt="Thumbnail 2"
                cursor="pointer"
              />
              <img 
                src="./ExampleImage.jpg" 
                style={{ width: "120px", height: "160px", cursor: 'pointer' }} 
                onClick={handleImageChange}
                alt="Thumbnail 3"
                cursor="pointer"
              />
            </Stack>
            <Box align="right" mr={8}>
              <img 
                src={selectedImage} 
                style={{ width: "350px", height: "550px" }} 
                alt="Selected" 
                cursor="pointer"
              />
            </Box>
          </Stack>
        </Box>
        <Divider orientation='vertical' />
        <Box width={750} height={600} gap={2}>
            <Stack gap={2} ml={2}>
            <Typography fontWeight={'bold'} mt={2}>
              Rimie Navy Bomber Jacket
            </Typography>
            <Typography>
                Reviews
            </Typography>

            <Typography>
                INR 7000
            </Typography>
            <Typography>
                Quantity
            </Typography>
            <QuantityInput/>
            <Stack direction={'row'}>
                <Button variant='text' onClick={handleCart}>Cart</Button>
            </Stack>
            <Typography>
                Size
            </Typography>
            <Typography>
                small medium large
            </Typography>
            <Typography>
                Product Details
            </Typography>
            <Typography>
            This greyish blue Jacket offers premium winter protection with its warm fabric composition. Street-style inspired details such as full sleeve and baseball collar complete the timeless look. The perfect blend of warmth and style
            </Typography>

            </Stack>
        </Box>
    </Stack>
      <CartPopUp open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer/>
      </>
  )
}

export default ProductPage
