import React, { useState } from 'react';
import "./footer.component.scss";
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    const [search, setSearch] = useState('');
    const onInputSearch = (e: any) => {
        const value = e.target.value;
        setSearch(value)
    }
    return (
        <footer className='footer-section'>
            <div className='footer-main-flex'>
                <div className='footer-first-section container'>
                    <div className='app-section'>
                        <div className='title-container'>
                            <div className='circles circle-1'></div>
                            <div className='title'>Adarsha</div>
                            <div className='circles circle-2'></div>
                        </div>
                        <div className='desc'>
                            <p>
                            We are eager to help you to make your house more beautiful, more livable with an affordable price & good quality of furnitures.
                            </p>
                        </div>
                        <div className='social-icons'>
                            <div><BiLogoFacebook /></div>
                            <div><AiOutlineTwitter /></div>
                            <div><BiLogoInstagram /></div>
                        </div>
                    </div>
                    <div className='app-links-section'>
                        <div className='links-title'>Shop</div>
                        <div className='links'>Cart</div>
                        <div className='links'>My Account</div>
                        <div className='links'>Wishlist</div>
                    </div>
                    <div className='app-contacts-section'>
                            <div className='contacts-title'>Help</div>
                            <div className='links'>Contact</div>
                            <div className='links'>FAQ</div>
                            <div className='links'>Shipping</div>
                        </div>
                    <div className='app-subcribe-section'>
                            <div className='subcribe-title'>Newsletter</div>
                            <div className='subcripe-inp-section'>
                                <div className='search-wrapper'>
                                    <input type="text" name="search" placeholder='your@email.com' value={search} onChange={onInputSearch} />
                                    <button>Subscribe</button>
                                </div>
                            </div>
                            <div className='subcribe-desc'>
                                <p>I want emails from Minim with products information, promotions, 
                                    advertisements <span>Here.</span> Read our <span>Privacy Policy</span>
                                </p>
                            </div>
                    </div>
                </div>
                <div className='footer-sec-section'>
                    <div className='footer-sec-inner container'>
                        <div className='left-inner'>©2023 <span>Adarsha</span> . All Rights Reserved.</div>
                        <div className='policy-links'>
                            <div>Privacy policy</div>
                            <div>Terms of Services</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;