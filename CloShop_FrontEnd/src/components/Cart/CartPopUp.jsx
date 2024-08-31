// CartPopUp.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Button, Stack, Typography } from '@mui/material';
import QuantityInput from '../ProductPage/Count';

const CartPopUp = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{width: 600,flexShrink: 0,'& .MuiDrawer-paper': {width: 600,boxSizing: 'border-box',},}}>
      <Stack p={2} gap={2}>
        <Typography variant="h6">Your Cart</Typography>
        <Stack direction={'column'} gap={50}>
            <Stack direction={'row'} gap={2}>
                <img src='./ExampleImage.jpg' style={{width:"100px", height:"160px"}}/>
                <Stack direction={'column'} gap={2}>
                    <Typography>
                        Black leather Jacket
                    </Typography>
                    <QuantityInput/>
                    <Typography>
                        INR 7987
                    </Typography>
                </Stack>
            </Stack>
            <Button variant='outlined'>BUY</Button>
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default CartPopUp;
