import React from 'react';
import { MdSettings, MdNotificationsNone } from "react-icons/md";
import './styles/Navbar.css';

const imgProfile = 'https://pbs.twimg.com/profile_images/1291628276029456385/Gbc1FOVU_400x400.jpg';
const SIZE = '32px';

const Navbar = () => (
  <nav className="navbar">
    <section className="navbar__left">
      <h1>Sale Estate</h1>
      <span>Buy</span>
      <span> Sell</span>
      <span>Rent</span>
      <input type="search" placeholder="Search"/>
    </section>
    <section className="navbar__right">
      <i><MdSettings size={SIZE} /></i>
      <i><MdNotificationsNone size={SIZE} /></i>
      <img className="image" src={imgProfile} alt="Profile"/>
      <p>Mauricio Rodriguez</p>
    </section>
  </nav>
);

export default Navbar;