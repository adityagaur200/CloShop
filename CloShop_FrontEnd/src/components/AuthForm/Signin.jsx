import React, { useState } from 'react'
import { Box,Stack,Typography,TextField,Button} from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Signin = () => 
{
    const navigate = useNavigate();
    const [inputs,setInput] = useState(
        {
            Email:"",
            UserName:"",
            Password:"",
            ConfirmPassword:"",
        }
    )
  return (
    <Box border={'2px solid grey'} borderRadius={2} width={450}>
    <Stack direction={'column'} gap={1} m={2}>
      <Typography fontFamily={'cursive'} fontSize={30} align='center'>
        CLOSHOP
      </Typography>
      <Typography fontSize={16} fontWeight={'bold'}>
          Email :
      </Typography>
      <TextField variant="outlined" size='small' type="email" placeholder='Email' value={inputs.Email} onChange={(e)=>setInput({...inputs,Email:e.target.value})} />
      <Typography fontSize={16} fontWeight={'bold'}>
          UserName :
      </Typography>
      <TextField variant="outlined" type="text" size='small' placeholder='User Name' value={inputs.UserName} onChange={(e)=>setInput({...inputs,UserName:e.target.value})} />
      <Typography fontSize={16} fontWeight={'bold'}>
          Password :
      </Typography>
      <TextField variant="outlined" type='password' size='small' placeholder='Password' value={inputs.Password} onchange={(e)=>setInput({...inputs,Password:e.target.value})}/>
      <Typography fontSize={16} fontWeight={'bold'}>
         Confirm Password :
      </Typography>
      <TextField variant="outlined" type='password' size='small' placeholder='Confirm Password' value={inputs.Password} onchange={(e)=>setInput({...inputs,Password:e.target.value})}/>
      <Button variant='outline' onClick={()=>navigate('/Profile')}>Sign in</Button>
    </Stack>
  </Box>
  )
}

export default Signin
