import { Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const CustomerDetails = () => {
    const [inputs,setInputs] = useState(
        {
            FirstName : "",
            LastName: "",
            Address:"",
            PhoneNumber:"",
            City:"",
            PinCode:"",
            State:"",

        }
    )
  return (
    <Stack spacing={2}>
            <Typography fontSize={18}>
                Welcome to CloShop!!!
            </Typography>
            <Stack direction={"row"} gap={3}>
                <Stack direction={"column"} gap={1}>
                    <TextField id="standard-basic" label="First Name" variant="standard" type={'text'} value={inputs.value} onChange={(e)=>{setInputs(...inputs,FirstName=e.target.value)}}/>
                    <TextField id="standard-basic" label="Contact Number" variant="standard" type='number' value={inputs.value} onChange={(e)=>{setInputs(...inputs,PhoneNumber=e.target.value)}}/>
                    
                </Stack>
                <Stack direction={"column"} gap={1}>
                    <TextField id="standard-basic" label="Last Name" variant="standard" type='text' value={inputs.value} onChange={(e)=>{setInputs(...inputs,LastName=e.target.value)}} />
                </Stack>
            </Stack>
            <Stack spacing={2}>
            <TextField id="standard-basic" label="Address" variant="standard" type='text' value={inputs.value} onChange={(e)=>{setInputs(...inputs,Address=e.target.value)}}/>
            <TextField id="standard-basic" label="Pin Code" variant="standard" type='number' value={inputs.value} onChange={(e)=>{setInputs(...inputs,PinCode=e.target.value)}} />
            <TextField id="standard-basic" label="City" variant="standard" type='text' value={inputs.value} onChange={(e)=>{setInputs(...inputs,City=e.target.value)}}/>
            <TextField id="standard-basic" label="State" variant="standard" type='text' value={inputs.value} onChange={(e)=>{setInputs(...inputs,State=e.target.value)}}/>
            </Stack>
        </Stack>
  )
}

export default CustomerDetails
