import React from 'react';
import './Main_Img.css';
import { five, fiveRound, many, three, threeRound } from '../../svg/logo';
import CustomSlider from '../customSlider/CustomSlider';
import { memo } from 'react';

function Main_Img() {
    return (
        <div className='main_img'>
            <div className='fests'>
                <div>
                    {three}
                    {many}
                    {threeRound}
                    {five}
                    {fiveRound}
                </div>
                <h1>INKFESTS OF YORE</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me.
                    It's easy. Just click “Edit Text” or double click me to add
                    your own content and make changes to the font. Feel free to
                    drag and drop me anywhere you like on your page. I'm a great
                    place for you to tell a story and let your users know a little
                    more about you.
                </p>
            </div>
            <CustomSlider />
        </div>
    )
}

export default memo(Main_Img)