import React from 'react';
import './Info_Header.css';
import { memo } from 'react';
import { fiveRound, sixRound, three, threeRound } from '../../svg/logo';
import { info } from '../../images/images';

function Info_Header() {
    return (
        <div className='info_header' style={{ backgroundImage: `url(${info})` }}>
            <div className="info_header_icon">
                {sixRound}
                {three}
                {fiveRound}
                {threeRound}
            </div>
            <h1>INFO</h1>
            <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                Just click “Edit Text” or double click me to add your own content and make
                changes to the font. Feel free to drag and drop me anywhere you like on your page.
                I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
        </div>
    )
}

export default memo(Info_Header)