import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UploadImage from './UploadImage'; // Multi-image upload component

const AddProduct = () => {
  const[count,setCount] = useState(0);
  const [inputs, setInputs] = useState({
    Description: '',
    Price: '',
    Quantity: '',
    Size: '',
    Product_Name: ''
  });

  useEffect(()=>
  {
    const fetchcount =async () =>
    {
      const response = await fetch('http://localhost:9090/Products/all');
      const data = await response.json();
      setCount(data.length);
    };
    fetchcount();
  },[])
  const handleAddProduct = async () => {
    const payload = {
        id: count + 1, // New ID is the current count + 1
        description: inputs.Description,
        price: inputs.Price,
        quantity:inputs.Quantity,
        size: inputs.Size,
        product_Name: inputs.Product_Name,
    };

    try {
        const response = await axios.post('http://localhost:9090/Products/Add', payload, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Product added:', response.data);
        alert('Product added successfully!');
        // Reset form fields
        setInputs({
          Description: '',
          Price: '',
          Quantity: '',
          Size: '',
          Product_Name: ''
        });
        await fetchcount();
      }
      catch (error) {
        console.error('Error adding Product:', error.response ? error.response.data : error.message);
        alert('Error adding Product.');
      }
      };
      const fetchcount =async () =>
      {  
        const response = await fetch('http://localhost:9090/Products/all');
        const data = await response.json();
        setCount(data.length);
      };
  return (
    <Stack direction={'column'} gap={2}>
      <Typography align='center'>
        Add New Product
      </Typography>
      <TextField
        id="name"
        label="Name"
        variant="standard"
        type='text'
        name="Product_Name"
        value={inputs.Product_Name}
        onChange={(e)=>setInputs({...inputs,Product_Name:e.target.value})}
      />
      <TextField
        id="description"
        label="Description"
        variant="standard"
        type='text'
        name="Description"
        value={inputs.Description}
        onChange={(e)=>setInputs({...inputs,Description:e.target.value})}
      />
      <TextField
        id="price"
        label="Price"
        variant="standard"
        type='number'
        name="Price"
        value={inputs.Price}
        onChange={(e)=>setInputs({...inputs,Price:e.target.value})}
      />
      <TextField
        id="quantity"
        label="Quantity"
        variant="standard"
        type='number'
        name="Quantity"
        value={inputs.Quantity}
        onChange={(e)=>setInputs({...inputs,Quantity:e.target.value})}
      />
      <TextField
        id="size"
        label="Size"
        variant="standard"
        type='text'
        name="Size"
        value={inputs.Size}
        onChange={(e)=>setInputs({...inputs,Size:e.target.value})}
      />

      {/* Upload multiple images using UploadImage component */}
      <UploadImage/>

      <Button variant='outlined' onClick={handleAddProduct}>
         Add
      </Button>
    </Stack>
  );
};

export default AddProduct;
