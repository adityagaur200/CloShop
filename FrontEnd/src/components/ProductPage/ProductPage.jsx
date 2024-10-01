import React, { useState, useEffect } from 'react';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import QuantityInput from './Count';
import CartPopUp from '../Cart/CartPopUp';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from './Review';

const ProductPage = () => {
  const { id } = useParams();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  
  const handleImageChange = (imageUrl) => {
    setSelectedImage(imageUrl); 
  };

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/Products/product/${id}`);
        setProduct(response.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product details.");
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading..</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  if (!product) {
    return <div>No product found.</div>; 
  }

  const { product_Name, price, sizes, description, images = [] } = product;

  return (
    <>
      <Header />
      <Stack direction="row" alignItems="center" justifyContent="center" mt={10}>
        <Box width={750} height={600}>
          <Stack direction="row" gap={15} ml={5}>
            
            <Stack direction="column" gap={2} mt={2}>
              {images.length > 0 ? (
                images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    style={{ width: "120px", height: "160px", cursor: 'pointer' }}
                    onClick={() => handleImageChange(image)}
                    alt={`Thumbnail ${index + 1}`}
                  />
                ))
              ) : (
                <Typography>No images available</Typography>
              )}
            </Stack>

            <Box align="right" mr={8}>
              <img
                src={selectedImage || images[0] || 'image1.png'} 
                style={{ width: "350px", height: "550px" }}
                alt="Selected"
              />
            </Box>
          </Stack>
        </Box>

        <Divider orientation='vertical' />

        <Box width={750} height={600} gap={2}>
          <Stack gap={2} ml={2}>
            <Typography fontWeight="bold" mt={2}>
              {product_Name} 
            </Typography>

            <Typography>Reviews</Typography>
            <Reviews productId={product.id} /> 

            <Typography>INR {price}</Typography>

            <Typography>Quantity</Typography>
            <QuantityInput />

            <Stack direction="row">
              <Button variant="text" onClick={handleCart}>Add Cart</Button>
            </Stack>

            <Typography>Size</Typography>
            <Typography>
              {Array.isArray(sizes) && sizes.length > 0 ? sizes.join(', ') : 'No sizes available'}
            </Typography> 

            <Typography>Product Details</Typography>
            <Typography>{description || 'No description available'}</Typography> 
          </Stack>
        </Box>
      </Stack>

      <CartPopUp open={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Footer />
    </>
  );
};

export default ProductPage;
