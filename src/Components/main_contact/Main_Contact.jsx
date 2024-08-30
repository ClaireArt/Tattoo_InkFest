import React, { memo } from 'react';
import './Main_Contact.css';
import { fiveRound, oneRound, sixRound, threeRound } from '../../svg/logo';
import { fe, inc, piercing, sailor } from '../../images/images';

function Main_Contact() {
    return (
        <div className='main_contact'>
            <div className='borders'></div>
            <div className='Sponsors'>
                <div>
                    {oneRound}
                    {threeRound}
                    {fiveRound}
                </div>
                <h1>SPONSORS</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>
            <div className='images_menu'>
                <img src={sailor} alt="not found" />
                <img src={piercing} alt="not found" />
                <img src={fe} alt="not found" />
                <img src={inc} alt="not found" />
            </div>
            <div className='Contact'>
                <div>
                    {threeRound}
                    {sixRound}
                </div>
                <h1>CONTACT</h1>
            </div>
            <div className='borders'></div>
        </div>
    )
}

export default memo(Main_Contact)