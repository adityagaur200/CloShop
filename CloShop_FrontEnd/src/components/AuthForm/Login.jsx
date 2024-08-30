import React, { useState } from 'react'
import {Box, Button, Stack, TextField, Typography} from "@mui/material"
import {useNavigate} from "react-router-dom"
const Login = () => 
{
    const navigate = useNavigate();
    const [inputs,setInput] = useState(
        {
            Email:'',
            Password:'',
        }
    )
  return (
    <Box border={'2px solid grey'} borderRadius={2} width={450} >
      <Stack direction={'column'} gap={1} m={2}>
        <Typography fontFamily={'cursive'} fontSize={30} align='center'>
            CLOSHOP
        </Typography>
        <Typography fontSize={16} fontWeight={'bold'}>
            Email :
        </Typography>
        <TextField size='small' variant="outlined" type="email" placeholder='Email' value={inputs.Email} onChange={(e)=>setInput({...inputs,Email:e.target.value})} />
        <Typography fontSize={16} fontWeight={'bold'}>
            Password :
        </Typography>
        <TextField size="small" variant="outlined" type='password' placeholder='Password' value={inputs.Password} onchange={(e)=>setInput({...inputs,Password:e.target.value})}/>
        <Button variant='outline' onClick={()=>navigate('/Profile')}>Login</Button>
        <Typography fontSize={13} align='center'>
            New to CloShop! <Button variant='text'  size='small' onClick={()=>navigate('/sign_in')}>Sign in</Button>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Login
