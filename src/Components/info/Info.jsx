import React from 'react';
import Info_Header from '../info_header/Info_Header';
import Info_Main from '../info_main/Info_Main';
import './Info.css';
import { memo } from 'react';

function Info() {
  return (
    <div className='info'>
        <Info_Header/>
        <Info_Main/>
    </div>
  )
}

export default memo(Info)