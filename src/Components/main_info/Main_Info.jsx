import React from 'react';
import './Main_Info.css';
import { oneRound, sixRound, three, threeRound } from '../../svg/logo';
import { butterfly } from '../../images/images';
import { memo } from 'react';

function Main_Info() {
    return (
        <div className='main_info' style={{ backgroundImage: `url(${butterfly})` }}>
            <div className='container'>
                <div className='main_info_content'>
                    <div>
                        <div>
                            {oneRound}
                            {sixRound}
                            {three}
                            {threeRound}
                        </div>
                        <h1>SF'S TOP TATTOO CONVENTION</h1>
                        <p>
                            The fourth annual Inkfest will take place at the Castro
                            Convention Center on March 15 from 11am to 8pm. Come learn
                            about tattoo designs and trends, watch the industry's top
                            artists working, or even get a stunning tattoo!
                        </p>
                    </div>
                    <div>
                        <time>Mar 15, 2035, 11:00 AM – 8:00 PM</time>
                        <button>SCHEDULE & TICKETS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Main_Info)