import { Stack,Box} from '@mui/material'
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";
import { LuUser2 } from "react-icons/lu";
function IconBox() {
  return (
    <Stack direction={'row'} gap={2} justifyContent={'center'}>
      <Box>
        <LuUser2 size={30}/>
      </Box>
      <Box>
        <IoSearchOutline size={30}/>
      </Box>
      <Box>
        <FcLike size={30}/>
      </Box>
      <Box>
        <BsCart3 size={30}/>
      </Box>
    </Stack>
  )
}
export default IconBox
