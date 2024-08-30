import React, { memo } from 'react';
import './Artists_Header.css';
import { artists } from '../../images/images';
import { many, sevenRound } from '../../svg/logo';

function Artists_Header() {
    return (
        <div className='artists_header' style={{ backgroundImage: `url(${artists})` }}>
            <div className='artists_icon'>
                {many}
                {sevenRound}
            </div>
            <h1>INKFEST ARTISTS</h1>
            <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                Just click “Edit Text” or double click me to add your own content and make
                changes to the font. Feel free to drag and drop me anywhere you like on your
                page. I’m a great place for you to tell a story and let your users know a little
                more about you.
            </p>
        </div>
    )
}

export default memo(Artists_Header)