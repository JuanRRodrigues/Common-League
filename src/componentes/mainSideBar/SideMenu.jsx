import React from 'react';
import { useState } from 'react';
import NavListData from '../../data/navListData';
import NavListItem from '../NavListItem/NavListItem';
import './SideMenu.css'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import YouTubeIcon from '@mui/icons-material/YouTube';

function SideMenu() {
    const [navData, setNavData] = useState(NavListData);
    return (
    <div className='SideMenu'>
        <a href="#" className='logo'>
        <SportsEsportsIcon/>
            <span className='brand'>Commom</span>
        </a>
        <ul className='nav'>
            {navData.map(item => (
                <NavListItem key={item.id} item={item}/>
            ))}
        </ul>

        <ul className='social'>
            <li>
                <a href="#">
                <InstagramIcon/>
                </a>
            </li>
            <li>
                <a href="#">
                <XIcon/>
                </a>
                
            </li>
            <li>
                <a href="#">
                <YouTubeIcon/>
                </a>
            </li>
            <li>
                <a href="#" className='share'>
                <ShareIcon/>
                </a>
            </li>

        </ul>
    </div>
    );
}

export default SideMenu;