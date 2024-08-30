import React, { memo } from 'react';
import './Info_Main.css';
import { food, photos, vendors, venues } from '../../svg/logo';

function Info_Main() {
  return (
    <div className='info_main'>
        <div className='info_main_box'>
            <div className='info_main_item'>
                {venues}
                <h1>VENUES</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>
            <div className='info_main_item'>
                {photos}
                <h1>PHOTOS</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>
            <div className='info_main_item'>
                {food}
                <h1>FOOD && DRINKS</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>
            <div className='info_main_item'>
                {vendors}
                <h1>VENDORS</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>
        </div>
        <button className='info_main_button'>BUY TICKETS</button>
    </div>
  )
}

export default memo(Info_Main)