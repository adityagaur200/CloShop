import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Button, Stack, Typography } from '@mui/material';
import QuantityInput from '../ProductPage/Count';

const CartPopUp = ({ open, onClose }) => {
  const [amount, setAmount] = useState(7987); // Set the product amount (in rupees)

  const handlePayment = async () => {
    try {
      // Create an order on the server (API call to your Spring Boot backend)
      const response = await fetch('http://localhost:9090/api/payment/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount }), // Send the amount from frontend
      });

      const orderData = await response.json(); // Get order details from the backend

      // Razorpay options
      const options = {
        key: 'rzp_test_nzjxF4wDxNbYDf', // Replace with your Razorpay key ID
        amount: orderData.amount, // Amount in paise
        currency: 'INR',
        name: 'Your Store Name',
        description: 'Black Leather Jacket Purchase',
        order_id: orderData.id, // The order ID created on the backend
        handler: async function (response) {
          // On successful payment, send the payment details to the backend for verification and saving to MongoDB
          const paymentData = {
            order_id: orderData.id,
            payment_id: response.razorpay_payment_id,
            status: 'success',
            amount: amount, // Amount in rupees
            currency: 'INR'
          };

          // Save payment details in backend (MongoDB)
          await fetch('http://localhost:9090/api/payment/verifyPayment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
          });

          alert('Payment successful and saved to the database!');
        },
        prefill: {
          name: 'Customer Name', // You can dynamically set customer details
          email: 'customer.email@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#F37254',
        },
      };

      // Open Razorpay checkout UI
      const rzp = new window.Razorpay(options);
      rzp.open(); // Open Razorpay checkout UI
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong during the payment process.');
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        width: 600,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 600,
          boxSizing: 'border-box',
        },
      }}
    >
      <Stack p={2} gap={2}>
        <Typography variant="h6">Your Cart</Typography>
        <Stack direction={'column'} gap={5}>
          <Stack direction={'row'} gap={2}>
            <img src='./ExampleImage.jpg' alt="Product" style={{ width: '100px', height: '160px' }} />
            <Stack direction={'column'} gap={2}>
              <Typography>Black Leather Jacket</Typography>
              <QuantityInput />
              <Typography>INR {amount}</Typography>
            </Stack>
          </Stack>
          <Button variant="outlined" onClick={handlePayment}>BUY</Button>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default CartPopUp;
