import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

export default function DropDown() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={()=>navigate("/")}>
            <ListItemText primary="HOME" />
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>navigate('/collection')}>
            <ListItemText primary="NEW ARRIVAL" />
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>navigate('/collection')}>
            <ListItemText primary="BEST SELLING" />
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" />
        <ListItem disablePadding>
          <ListItemButton onClick={()=>navigate('/collection')}>
            <ListItemText primary="CLOSHOP LUXE" />
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" />
        <ListItem disablePadding>
          <ListItemButton  onClick={()=>navigate('/Profile')}>
            <ListItemText primary="PLACE A RETURN/REPLACEMENT" />
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" />
        <ListItem disablePadding>
          <ListItemButton>
            <Stack direction={'column'}>
            <ListItemText primary="CUSTOMER SUPPORT" />
            <ListItemText primary="+91 762342342" />
            </Stack>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Box onClick={toggleDrawer(true)} ml={2}>
        <RxHamburgerMenu size={30} />
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
