import './Header.css';
import { facebook, instagram, youtube } from '../../svg/logo';
import { memo } from 'react';
import Header_Menu from '../header_menu/Header_Menu';

function Header() {
    console.log(window);

    return (
        <header>
            <div className='container'>
                <section className='header'>
                    <Header_Menu />
                    <nav>
                        <a href="https://www.facebook.com/wix" target="_blank">{facebook}</a>
                        <a href="https://www.instagram.com/wix/" target="_blank">{instagram}</a>
                        <a href="https://www.youtube.com/user/Wix" target="_blank">{youtube}</a>
                    </nav>
                </section>
            </div>
        </header>
    )
}

export default memo(Header)