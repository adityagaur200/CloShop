import React from 'react';
import ProductCard from '../MainComponent/DisplaySection/HomeBuySection/ProductCard/ProductCard';
import { Box } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const CollectionPage = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 2,
            maxWidth: 1200, // Adjust this value as needed for your design
            width: '100%',
          }}
        >
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
      </Box>
      <Footer/>
    </>
  );
};

export default CollectionPage;
