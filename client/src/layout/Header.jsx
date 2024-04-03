import { useState } from 'react'

import * as styles from './Header.css'

import useAuth from "../hooks/useAuth"

import { Link } from 'react-router-dom'

import SecondaryButton from '../components/common/SecondaryButton'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function Header() {
  const { user, logoutUser } = useAuth();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSupportHovered, setSupportHovered] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSupportHover = (hovered) => {
    setSupportHovered(hovered);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
    setSupportHovered(false);
  };

  if (user) {
      return (
        <div className={styles.Header}>
            <div className={styles.Nav}>
                <ul className={styles.NavList}>
                <li className={styles.NavItem}><Link to="/" className={styles.NavLink}>Home</Link></li>
                <li className={styles.NavItem}><Link to={`/profile/${user.id}`} className={styles.NavLink}>Profile</Link></li>
                <li
                    className={styles.NavItem}
                    onMouseEnter={toggleDropdown}
                    onMouseLeave={closeDropdown}
                    onMouseOver={() => handleSupportHover(true)}
                    onMouseOut={() => handleSupportHover(false)}
                >
                    <div className={styles.NavLink}>Support <FaArrowDown className={`${styles.DropdownArrow} ${isDropdownOpen || isSupportHovered ? styles.IconHover1 : ''}`} /></div>
                    <ul className={`${styles.Dropdown} ${isDropdownOpen ? styles.DropdownOpen : ''}`}>
                    <li className={styles.DropdownItem}><FaArrowRight className={`m-1`}/><Link to="" className={styles.DropdownLink}>Contact Us</Link></li>
                    <li className={styles.DropdownItem}><FaArrowRight className='m-1' /><Link to="" className={styles.DropdownLink}>Privacy Policy</Link></li>
                    <li className={styles.DropdownItem}><FaArrowRight className='m-1'/><Link to="" className={styles.DropdownLink}>Terms of Service</Link></li>
                    </ul>
                </li>
                </ul>
            </div>
        <div className={styles.AuthDiv}>
          <SecondaryButton onClick={logoutUser}>Logout</SecondaryButton>
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