import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { FaUserCheck } from 'react-icons/fa';
import { MdAddShoppingCart, MdDelete } from 'react-icons/md';
import { PiPackageDuotone } from 'react-icons/pi';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import Order from './Order';
import Users from './Users'; // Ensure this import is present if you have a Users component

const AdminPanel = () => {
  // Initialize state to control the content of the second box
  const [content, setContent] = useState(<AddProduct />);

  // Handle tab selection and change the content
  const handleTabClick = (contentComponent) => {
    setContent(contentComponent);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      p={2}
      sx={{ backgroundColor: '#f5f5f5' }} // Optional: Add background color
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="flex-start"
        sx={{ maxWidth: '1200px', width: '100%' }}
      >
        <Stack direction="column" spacing={2} width={200} sx={{ borderRight: '1px solid #ddd', pr: 2 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            onClick={() => handleTabClick(<AddProduct />)}
            sx={{ cursor: 'pointer', mb: 1 }}
          >
            <MdAddShoppingCart size={30} />
            <Typography fontSize={14} fontWeight="bold" ml={1}>
              Add Product
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            onClick={() => handleTabClick(<DeleteProduct />)}
            sx={{ cursor: 'pointer', mb: 1 }}
          >
            <MdDelete size={30} />
            <Typography fontSize={14} fontWeight="bold" ml={1}>
              Delete Product
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            onClick={() => handleTabClick(<Order />)}
            sx={{ cursor: 'pointer', mb: 1 }}
          >
            <PiPackageDuotone size={30} />
            <Typography fontSize={14} fontWeight="bold" ml={1}>
              Orders
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            onClick={() => handleTabClick(<Users />)}
            sx={{ cursor: 'pointer', mb: 1 }}
          >
            <FaUserCheck size={30} />
            <Typography fontSize={14} fontWeight="bold" ml={1}>
              Users
            </Typography>
          </Stack>
        </Stack>
        <Box
          flex={1}
          p={2}
          maxWidth="1000px"
          sx={{ border: '1px solid #ddd', borderRadius: 1, backgroundColor: '#fff' }}
        >
          {content}
        </Box>
      </Stack>
    </Box>
  );
};

export default AdminPanel;
