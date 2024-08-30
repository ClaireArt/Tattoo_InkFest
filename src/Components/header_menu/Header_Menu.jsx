import React, { memo } from 'react';
import Header_Menu_Item from '../Header_Menu_Item/Header_Menu_Item';

function Header_Menu() {
    return (
        <ul className='nav_menu'>
            <Header_Menu_Item txt='HOME' url='/' />
            <Header_Menu_Item txt='ARTISTS' url='/artists' />
            <Header_Menu_Item txt='INFO' url='info' />
            <Header_Menu_Item txt='CONTACT' />
        </ul>
    )
}

export default memo(Header_Menu)