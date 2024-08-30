import React, { memo } from 'react';
import './Artists.css';
import Artists_Header from '../artists_header/Artists_Header';
import Artists_Main from '../artists_main/Artists_Main';

function Artists() {
  return (
    <div className='artists'>
        <Artists_Header/>
        <Artists_Main/>
    </div>
  )
}

export default memo(Artists)