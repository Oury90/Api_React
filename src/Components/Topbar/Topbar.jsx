import React from 'react';
import "./Topbar.css";


export default function Topbar() {
  return (
    <div className="topnav">
        <div className='logo'>
            <h1>Logo</h1>
        </div>
        <div className='seach'>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type='text'/>
        </div>
            
        <ul className='nav'>
            <li>Home</li>
            <li>Browse</li>
            <li>Details</li>
            <li>Strems</li>
        </ul>
        <div className='profile'>
            <span>Profile</span>
            <img src='https://cdn.pixabay.com/photo/2019/11/29/21/30/girl-4662159_1280.jpg' alt='' />
        </div>
    </div>
  )
}
