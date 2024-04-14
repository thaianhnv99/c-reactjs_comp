import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ExpandLessIcon from 'src/icons/ExpandLessIcon';
import ExpandMoreIcon from 'src/icons/ExpandMoreIcon';
import StarIcon from 'src/icons/StarIcon';
import IconUI from 'src/icons/IconUI';
import { type MenuItem } from 'src/types';

interface MenuItemWrapperProps {
  open: boolean;
}
export const MenuItemWrapper = ({ open }: MenuItemWrapperProps) => {
  const [openWrapper, setOpenWrapper] = useState(open);
  const handleClick = () => {
    setOpenWrapper((prev) => !prev);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {openWrapper ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={openWrapper} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

interface SideBarProps {
  menu: MenuItem[];
}
const SideBar = ({ menu }: SideBarProps) => {
  return (
    <Box position="sticky" top={0} height="100vh" overflow="auto" width="100%">
      {menu.map((item, index) => {
        if (!item.url) {
          return (
            <List
              key={item.url || '' + index}
              sx={{
                width: '100%',
                bgcolor: 'background.paper',
              }}
              component="nav"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  {item?.name}
                </ListSubheader>
              }
            >
              {item.subItem?.map((sub, index) => {
                return (
                  <ListItemButton key={index} component={NavLink} to={sub?.url || ''}>
                    <ListItemIcon>
                      <IconUI name={sub.icon} />
                    </ListItemIcon>
                    <ListItemText primary={sub?.name} />
                  </ListItemButton>
                );
              })}
            </List>
          );
        } else {
          return (
            <ListItemButton key={item.url || ''} component={NavLink} to={item.url}>
              <ListItemIcon>
                <IconUI name={item.icon || 'icon_document'} />
              </ListItemIcon>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          );
        }
      })}
    </Box>
  );
};

export default SideBar;
