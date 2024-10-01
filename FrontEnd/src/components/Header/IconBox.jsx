import { Stack,Box} from '@mui/material'
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
import {useNavigate} from 'react-router-dom'
import CartPopUp from '../Cart/CartPopUp';
function IconBox() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const handleCart =()=>
    {
      setIsCartOpen(!isCartOpen);
    }
  
  return (
    <>
    <Stack direction={'row'} gap={2} justifyContent={'center'} >
      <Box onClick={()=>navigate('/Profile')} sx={{cursor:"pointer"}}>
        <LuUser2 size={30}/>
      </Box>
      <Box sx={{cursor:"pointer"}}>
        <IoSearchOutline size={30}/>
      </Box>
      <Box onClick={handleCart} sx={{cursor:"pointer"}}>
        <BsCart3 size={30}/>
      </Box>
    </Stack>
    <CartPopUp open={isCartOpen} onClose={() => setIsCartOpen(false)} />  
    </>
)
}
export default IconBox
