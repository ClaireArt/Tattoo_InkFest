import React, { memo } from 'react';
import './Main_Info_2.css';
import { five, fiveRound, oneRound, seven, sevenRound } from '../../svg/logo';

function Main_Info_2() {
    return (
        <div className='main_info_2'>
            <video className="background-video" loop="loop" autoPlay muted >
                <source src="https://video.wixstatic.com/video/0b340f_92771608eadd497e8bb49ffb59317dbb/1080p/mp4/file.mp4" />
            </video>
            <div className='container'>
                <div className='main_info_2_content'>
                    <div className='round'>
                        <div>
                            {seven}
                            {sevenRound}
                            <span>{oneRound}</span>
                            {fiveRound}
                            {five}
                        </div>
                        <h1>BY THE NUMBERS</h1>
                    </div>
                    <div className='inform_box'>
                        <div className='inform'>
                            <span>3</span>
                            <div></div>
                            <p>Previous Conventions</p>
                        </div>
                        <div className='inform'>
                            <span>500</span>
                            <div></div>
                            <p>Visitors Last Year</p>
                        </div>
                        <div className='inform'>
                            <span>9</span>
                            <div></div>
                            <p>Pro Tattoo Artists</p>
                        </div>
                        <div className='inform'>
                            <span>78</span>
                            <div></div>
                            <p>Combined Years of Experience</p>
                        </div>
                    </div>
                    <button className="buy">BUY TICKETS</button>
                </div>
            </div>
        </div>
    )
}

export default memo(Main_Info_2)