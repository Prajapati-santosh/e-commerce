import React from 'react'
import Logo from './logo.png'
import userIcon from './user.jpeg';
import './header.scss'
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import SearchBar from './searchbar/SearchBar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav>
        <img src={Logo} alt='logo-icon' className='logo' />

        <div className='mid-section'>
            {/* <div className='searchbar'>
                <input type='text' placeholder='search...'/>
                <IoSearchOutline/>
            </div> */}
            <SearchBar/>

            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>FAQ</li>
            </ul>
        </div>

        <div className='user'>
                <Link to='/login'>
                <img src={userIcon} alt='usericon'/>
                 </Link>
                <div className='carticon'>
                    <PiShoppingCart size={22}/>
                    <div className='notfication-dot'/>
                </div>

        </div>


    </nav>
  )
}

export default Header