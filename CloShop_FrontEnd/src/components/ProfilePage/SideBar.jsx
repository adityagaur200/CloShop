import {Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CiLogout } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
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
    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2} sx={{cursor:"pointer"}}>
        <FaRegUser size={30}/>
        <Typography fontSize={18}>
            Profile
        </Typography>
        
    </Stack>
    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2} onClick={handleCart} sx={{cursor:"pointer"}}>
        <IoIosCart size={30}/>
        <Typography fontSize={18} >
            Cart
        </Typography>
        
    </Stack>
    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}  onClick={()=>navigate('/orders')} sx={{cursor:"pointer"}}>
        <LuPackageCheck size={30}/>
        <Typography fontSize={18} >
            Orders
        </Typography>
        
    </Stack>
    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}  onClick={()=>navigate('/Service')} sx={{cursor:"pointer"}}>
        <LuReplace size={30}/>
        <Typography fontSize={18} >
            Replace/Return
        </Typography>
        
    </Stack>
    <Stack direction={'row'} justifyContent={'center'} gap={2} onClick={()=>navigate('/login')} sx={{cursor:"pointer"}}>
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
