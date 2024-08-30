import React, { memo } from 'react';
import './Artists_Main.css';
import { sixRound, sword, three, wing } from '../../svg/logo';
import { artistsPicture } from '../../dataFolder/data';

function Artists_Main() {
  return (
    <div className='artists_main'>
      <div className='artists_main_img'>
        {
          artistsPicture.map((el) => (
            <div className='artists_main_item' key={el.id} style={{ backgroundImage: `url(${el.img})` }}>
              <div className='block_text'>
                <div className='block_content'>
                  <span>{el.names}</span>
                  <span>{el.work}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className='artists_main_logo'>
        <div className='artists_main_icon_sword'>
          {wing}
          {sword}
          {wing}
        </div>
        <button>GET YOUR TICKETS</button>
      </div>
      <div className='artists_main_contact'>
        <div className='artists_main_icon'>
          {three}
          {sixRound}
        </div>
        <h1>CONTACT</h1>
      </div>
      <div className='artists_main_border'></div>
    </div>
  )
}

export default memo(Artists_Main)