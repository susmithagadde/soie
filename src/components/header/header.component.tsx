import React, { useState } from 'react';
import "./header.component.scss";
import { LiaSearchSolid } from 'react-icons/lia';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { TfiBag } from 'react-icons/tfi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [search, setSearch] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onInputSearch = (e: any) => {
        const value = e.target.value;
        setSearch(value)
    }
    const onMenuOpen = (val: boolean ) => {
        console.log("menu clicked!")
        setIsMenuOpen(val);
    }
    return (
        <header className='header-wrapper'>
            <div className='nav-comp'>
                <div className='nav-container'>
                    <div className='title-container'>
                        <div className='circles circle-1'></div>
                        <div className='title'>Adarsha</div>
                        <div className='circles circle-2'></div>
                    </div>
                    <div className='nav-links'>
                        <ul>
                            <li className='active'>Home</li>
                            <li>Categories</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='nav-right-panel'>
                        <div className='search-wrapper'>
                            <input type="text" name="search" placeholder='Search' value={search} onChange={onInputSearch} />
                            <button><LiaSearchSolid /></button>
                        </div>
                        <div><MdFavoriteBorder /><span className='badge'>2</span></div>
                        <div><BsPerson /></div>
                        <div><TfiBag /><span className='badge'>3</span></div>
                    </div>
                </div>
                <div className='nav-mobile-container'>
                    <div className='menu-icon'><GiHamburgerMenu onClick={() => onMenuOpen(true)} /></div>
                    <div className='title-container'>
                        <div className='circles circle-1'></div>
                        <div className='title'>Adarsha</div>
                        <div className='circles circle-2'></div>
                    </div>
                    {/* <div className='nav-links'>
                        <ul>
                            <li className='active'>Home</li>
                            <li>Categories</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div> */}
                    <div className='nav-right-panel'>
                        {/* <div className='search-wrapper'>
                            <input type="text" name="search" placeholder='Search' value={search} onChange={onInputSearch} />
                            <button><LiaSearchSolid /></button>
                        </div> */}
                        <div><MdFavoriteBorder /><span className='badge'>2</span></div>
                        <div><BsPerson /></div>
                        <div><TfiBag /><span className='badge'>3</span></div>
                    </div>
                </div>
            </div>
            {isMenuOpen && 
            <div className='mobile-view-menu'>
            <div className='header-menu-side-bar'>
                <div className='menu-close-icon' onClick={() => onMenuOpen(false)}><AiOutlineClose /></div>
                <div className='search-wrapper'>
                            <input type="text" name="search" placeholder='Search' value={search} onChange={onInputSearch} />
                            <button><LiaSearchSolid /></button>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li className='active'>Home</li>
                        <li>Categories</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
            </div>
            }
        </header>
    )
}

export default Header;