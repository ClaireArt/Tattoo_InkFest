import React from 'react';
import './Main.css';
import Main_Contact from '../main_contact/Main_Contact';
import Main_Img from '../main_img/Main_Img';
import Main_Header from '../main_header/Main_Header';
import Main_Info from '../main_info/Main_Info';
import Main_Info_2 from '../main_info_2/Main_Info_2';
import { memo } from 'react';

function Main() {

    return (
        <main>
            <Main_Header />
            <Main_Info />
            <Main_Info_2 />
            <div className='container'>
                <section className='main'>
                    <Main_Img />
                    <Main_Contact />
                </section>
            </div>
        </main>
    )
}

export default memo(Main)