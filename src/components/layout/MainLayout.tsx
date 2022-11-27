import { MouseEvent, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '@components/Logo';

import { MENU_ITEMS } from '@constants/menu';

import useToggle from '@hooks/useToggle';

import authStore from '@stores/AuthStore';
import userStore from '@stores/UserStore';

import AccountCircle from '@mui/icons-material/AccountCircle';
import { Container, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const drawerWidth = 240;

interface ItemListProps {
  name: string;
  icon: any;
  link: string;
}

const ItemList = ({ name, icon, link }: ItemListProps) => {
  const router = useRouter();
  return (
    <Link href={link} passHref key={name}>
      <ListItem disablePadding selected={link == router.pathname}>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText sx={{ textTransform: 'capitalize' }} primary={name} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

interface MainLayoutProps extends Props {
  title: string;
}

export default function MainLayout({ title, children }: MainLayoutProps) {
  const user = userStore((state) => state.user);
  const logout = authStore((state) => state.logout);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex">
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          bgColor: '#003366',
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <Logo />
        </List>
        <Divider />
        <List>
          <ItemList {...MENU_ITEMS.GENERAL} />
          <ItemList {...MENU_ITEMS.MARKETING} />
          <ItemList {...MENU_ITEMS.HUMAN_RESOURCES} />
        </List>
        <Divider />
        <List>
          <ItemList {...MENU_ITEMS.CONFIGURATION} />
        </List>
      </Drawer>
      <Box component="main" className="w-full">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography variant="h6" noWrap component="div">
              {user?.first_name} {user?.last_name}
            </Typography>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem
                onClick={() => {
                  logout();
                  handleClose();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        <Container className="mt-40 h-full w-full">{children}</Container>
      </Box>
    </Box>
  );
}
