import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './Header_menu_Item.css';

function Header_Menu_Item({ txt, url }) {
    return (
        <div className='header_menu_item'>
            <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={url}>{txt}</NavLink>
        </div>
    )
}

export default memo(Header_Menu_Item)