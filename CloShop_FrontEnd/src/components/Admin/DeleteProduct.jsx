import React, { useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
const DeleteProduct = () => {
    const [inputs,setInputs] = useState({
        Description : '',
        price : "",
        Quantity:"",
        size:"",
        ImageUrl:"",

    })
  return (
    <>
    <Stack direction={'column'} gap={2}>
        <Typography align='center'>
          Welcome Admin To CloShop!!!!
        </Typography>
        <TextField id="standard-basic" label="Description" variant="standard" type={'text'} value={inputs.value} onChange={(e)=>{setInputs(...inputs,Description=e.target.value)}}/>
        <TextField id="standard-basic" label="Price" variant="standard" type={'number'} value={inputs.value} onChange={(e)=>{setInputs(...inputs,Price=e.target.value)}}/>
        <TextField id="standard-basic" label="Quantity" variant="standard" type={'number'} value={inputs.value} onChange={(e)=>{setInputs(...inputs,Quantity=e.target.value)}}/>
        <TextField id="standard-basic" label="size" variant="standard" type={'text'} value={inputs.value} onChange={(e)=>{setInputs(...inputs,size=e.target.value)}}/>
        <TextField id="standard-basic" label="ImageUrl" variant="standard" type='url' value={inputs.value} onChange={(e)=>{setInputs(...inputs,ImageUrl=e.target.value)}}/>
        <Button variant='outlined'>Delete</Button>
        </Stack>
      
    </>
  )
}

export default DeleteProduct
