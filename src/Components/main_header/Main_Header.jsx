import React from 'react';
import './Main_Header.css';
import { logo, tatoo, tatoo_line } from '../../svg/logo';
import { background} from '../../images/images';
import { memo } from 'react';

function Main_Header() {
    return (
        <div className='main_header' style={{ backgroundImage: `url(${background})` }}>
            <div className='container'>
                <div className='main_header_content'>
                    <span className='logo'>{logo}</span>
                    <span className='text'>
                        <span style={{ fontSize: '75px' }}>I</span>
                        <span style={{ fontSize: '85px' }}>N</span>
                        <span style={{ fontSize: '95px' }}>K</span>
                        <span style={{ fontSize: '105px' }}>F</span>
                        <span style={{ fontSize: '95px' }}>E</span>
                        <span style={{ fontSize: '85px' }}>S</span>
                        <span style={{ fontSize: '75px' }}>T</span>
                    </span>
                    <div className='tatoo'>
                        {tatoo_line}
                        {tatoo}
                        {tatoo_line}
                    </div>
                    <span className='convention'>CONVENTION</span>
                    <time>Mar 15, 2035, 11:00 AM-8:00 PM</time>
                    <button>BUY TICKETS</button>
                </div>
            </div>
        </div>
    )
}

export default memo(Main_Header)