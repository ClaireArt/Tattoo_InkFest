import React from 'react';
import './Footer.css';
import { facebook, instagram, youtube } from '../../svg/logo';
import { memo } from 'react';

function Footer() {
    return (
        <footer>
            <div className='container'>
                <section className='footer'>
                    <div className='footer_menu'>
                        <div className='Venue'>
                            <h1>Venue</h1>
                            <span>
                                <p>Castro Convention Center</p>
                                <p>500 Terry Francine Street</p>
                                <p>San Francisco, CA 94158</p>
                            </span>
                            <span>
                                <p>info@mysite.com</p>
                                <p>Tel: 123-456-7890</p>
                            </span>
                            <nav>
                                <a href="https://www.facebook.com/wix" target="_blank" >{facebook}</a>
                                <a href="https://www.instagram.com/wix/" target="_blank" >{instagram}</a>
                                <a href="https://www.youtube.com/user/Wix" target="_blank" >{youtube}</a>
                            </nav>
                        </div>
                        <div className='Questions'>
                            <h1>Questions?</h1>
                            <span>Call us at 123-456-7890 or leave us a message:</span>
                            <form>
                                <div>
                                    <input type="text" placeholder="Full Name" autoComplete='off' />
                                    <input type="email" placeholder="Email" autoComplete='off' />
                                </div>
                                <input type="text" placeholder="Type your message here..." autoComplete='off' />
                                <button className='submit'>SUBMIT</button>
                            </form>
                        </div>
                        <div className='Updated'>
                            <h1>Stay Updated</h1>
                            <span>Sign up to hear updates about artists, agenda, and more!</span>
                            <form>
                                <input type="email" placeholder='Email' autoComplete='off' />
                                <button className='subscribe'>SUBSCRIBE</button>
                            </form>
                        </div>
                    </div>
                    <div className='border'></div>
                    <span>© 2035 by INKFEST San Francisco's Tattoo Convention. Powered and secured by <a href="https://ru.wix.com/website-template/view/html/2430?originUrl=https%3A%2F%2Fru.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Dtatoo&tpClick=view_button&esi=cbd92256-764c-4471-a5b4-df1e0f847bab" target="_blank" >Wix</a></span>
                </section>
            </div>
        </footer>
    )
}

export default memo(Footer)