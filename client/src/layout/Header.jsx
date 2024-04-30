import React, { useState } from 'react'

import * as styles from './Header.css'

import useAuth from "../hooks/useAuth"

import { Link } from 'react-router-dom'

import {Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Fade, Tooltip} from '@mui/material';

import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

function Header() {
  const { user, logoutUser } = useAuth();


  // MATERIAL UI
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (user) {
      return (
        <div className={styles.Header}>
            <div className={styles.Nav}>
                <ul className={styles.NavList}>
                <li className={styles.NavItem}><Link to="/" className={styles.NavLink}>Home</Link></li>
                </ul>
            </div>
        <div className={styles.AuthDiv}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 30, height: 30 }}><img src={user.profile_image} style={{ width: 30, height: 30}}/></Avatar>
          </IconButton>
        </Tooltip>
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link to={`/profile/${user.id}`} style={{textDecoration: 'none'}}><MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 24, height: 24 }}  src={user.profile_image}/><span style={{marginLeft: '5px'}}>Profile</span>
        </MenuItem></Link>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 24, height: 24 }}/> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logoutUser}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        </div>
      </div>
      );
  } else {
    return (
      <div>

      </div>
    )
  }
}

export default Header