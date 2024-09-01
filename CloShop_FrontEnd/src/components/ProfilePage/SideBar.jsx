import {Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CiLogout } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { IoIosCart } from 'react-icons/io'
import { LuPackageCheck, LuReplace } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import CartPopUp from '../Cart/CartPopUp'

const SideBar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const navigate = useNavigate();
    const handleCart =()=>
    {
        setIsCartOpen(!isCartOpen)
    }
  return (
    <Stack direction={"column"} gap={2}>
    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
        <FaRegUser size={30}/>
        <Typography fontSize={18}>
            Profile
        </Typography>
        
    </Stack>
    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2} onClick={handleCart}>
        <IoIosCart size={30}/>
        <Typography fontSize={18} >
            Cart
        </Typography>
        
    </Stack>
    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}  onClick={()=>navigate('/orders')}>
        <LuPackageCheck size={30}/>
        <Typography fontSize={18} >
            Orders
        </Typography>
        
    </Stack>
    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}  onClick={()=>navigate('/Service')}>
        <LuReplace size={30}/>
        <Typography fontSize={18} >
            Replace/Return
        </Typography>
        
    </Stack>
    <Stack direction={'row'} justifyContent={'center'} gap={2} onClick={()=>navigate('/Login')}>
        <CiLogout size={30}/>
        <Typography fontSize={18} >
            Log Out
        </Typography>
       
    </Stack>
    
    <CartPopUp open={isCartOpen} onClose={() => setIsCartOpen(false)} />
</Stack>
  )
}

export default SideBar
