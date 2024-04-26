import { useState } from 'react';
import * as styles from './SideHeader.css'
import Logo from '../assets/FULL_LOGO.png'

import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

import {Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Fade, Tooltip} from '@mui/material';

import {Settings, Logout, } from '@mui/icons-material/';
import HouseIcon from '@mui/icons-material/House';
import SettingsIcon from '@mui/icons-material/Settings';
import { TfiThought } from "react-icons/tfi";

const SideHeader = () => {

const {user, logoutUser} = useAuth()


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
    <div className={styles.SideHeaderContainer}>
        <div className={styles.LogoDiv}>
            <img src={Logo} alt="thoughtz" style={{width: '150px'}}/>
        </div>
            <ul className={styles.SideHeader}>
                <li className={styles.SideHeaderItem}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}><span className={styles.NavText}>Home</span></Link>
                    <HouseIcon className={styles.NavIcon} />
                </li>
                <li className={styles.SideHeaderItem}>
                    <Link style={{ textDecoration: 'none', color: 'white' }}><span className={styles.NavText}>Thoughts</span></Link>
                    <TfiThought className={styles.NavIcon} />
                </li>
                <li className={styles.SideHeaderItem}>
                    <Link style={{ textDecoration: 'none', color: 'white' }}><span className={styles.NavText}>Settings</span></Link>
                    <SettingsIcon className={styles.NavIcon} />
                </li>
            </ul>



        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }}><img src={user.profile_image} style={{ width: 40, height: 40}}/></Avatar>
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
  )
    } else {
    return (
        <div>

        </div>
    )
    }
}

export default SideHeader