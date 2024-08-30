import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { RxHamburgerMenu } from "react-icons/rx";

export default function DropDown() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['HOME', 'NEW ARRIVAL', 'BEST SELLING', 'CLOSHOP LUXE','PLACE A RETURN/REPLACEMENT','CUSTOMER SUPPORT'].map((text, index) => (
          <ListItem key={text}  disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
              <Divider variant="middle"/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box onClick={toggleDrawer(true)} ml={2}>
        <RxHamburgerMenu size={30}/>
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}