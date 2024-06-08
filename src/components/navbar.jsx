import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkTheme from '../assets/dark_mode.svg';
import lightTheme from '../assets/light_mode.svg';
import ThemeContext from '../contexts/ThemeContext';
import ResultContext from '../contexts/ResultsContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const {searchTerm, setSearchTerm} = useContext(ResultContext);
    const {dark, setDark} = useContext(ThemeContext);
    

    return (
        <>
        <header className='px-20 flex flex-col'>
            <nav className='flex items-center justify-between  py-5'>
                <Link to={'/'}>
                    <img src={logo} alt="logo" className='w-[100px]' />
                </Link>
                <div className='border-solid dark:bg-input-dark dark:border-none shadow-inner flex items-center border border-slate-100 flex-1 max-w-[600px] p-2 px-4 rounded-3xl'>
                    <input className='w-full text-lg outline-none bg-inherit'
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        placeholder='Search the web privately...' 
                    />
                    <span className="material-symbols-outlined text-red text-3xl">search</span>
                </div>
                <div onClick={() => setDark(!dark)}>
                    {!dark ? <img src={lightTheme} alt="light" /> : <img src={darkTheme} alt="dark" />}
                </div>
            </nav>
            <div className='flex items-center p justify-center text-text-grey text-xl gap-6 mb-2'>
                <NavLink to={'/web'}>
                    <div className='flex items-center '>
                    <span className="material-symbols-outlined">search</span>
                    All
                    </div>
                </NavLink>
                <NavLink to={'/images'}>
                <div className='flex items-center '>
                    <span className="material-symbols-outlined">imagesmode</span>
                    Images
                </div>
                </NavLink>
                <NavLink to={'/news'}>
                    <div className='flex items-center '>
                        <span className="material-symbols-outlined">news</span>
                        News
                    </div>
                </NavLink>
                <NavLink to={'/videos'}>
                    <div className='flex items-center '>
                        <span className="material-symbols-outlined">animated_images</span>
                        Videos
                    </div>
                </NavLink>
            </div>
        </header>
        <hr />
        </>
    );
}

export default Navbar;
