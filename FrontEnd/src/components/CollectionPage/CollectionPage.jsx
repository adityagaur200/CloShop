import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making API calls

const CollectionPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Fetch all products when component mounts
  useEffect(() => {
    axios.get('http://localhost:9090/Products/all') // Assuming your getAll API endpoint is '/api/all'
      .then((response) => {
        setProducts(response.data); // Set the fetched products to state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // Empty dependency array means this will run once when the component mounts

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 2,
            maxWidth: 1200,
            width: '100%',
          }}
        >
          {/* Map through products and render each card */}
          {products.map((product) => (
            <Box key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
              <Box>
                <img src='image1.png' alt={product.product_Name} style={{ width: "270px", height: "350px", overflow: "hidden", cursor: "pointer" }} />
              </Box>
              <Stack mt={1} mb={1} ml={1} sx={{ cursor: "pointer" }}>
                <Typography fontSize={14} fontFamily={'sans-serif'}>
                  {product.product_Name} {/* Display product name */}
                </Typography>
                <Typography>
                  {product.price} {/* Display product price */}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default CollectionPage;
