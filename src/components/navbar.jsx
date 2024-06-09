import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import darkTheme from '../assets/dark_mode.svg';
import lightTheme from '../assets/light_mode.svg';
import ThemeContext from '../contexts/ThemeContext';
import ResultContext from '../contexts/ResultsContext';
import { NavLink } from 'react-router-dom';
import { useDebounce } from 'use-debounce';

const Navbar = () => {
    const {setSearchTerm} = useContext(ResultContext);
    const {dark, setDark} = useContext(ThemeContext);
    const [text, setText] = useState("")
    const [debouncedValue] = useDebounce(text, 300)

    useEffect(() => {
        if(debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue, setSearchTerm])

    return (
        <>
        <header className='px-20 flex flex-col'>
            <nav className='flex items-center justify-between  py-5'>
                <Link to={'/'}>
                    <img src={logo} alt="logo" className='w-[100px]' />
                </Link>
                <div className='border-solid dark:bg-input-dark dark:border-none shadow-inner flex items-center border border-slate-100 flex-1 max-w-[600px] p-2 px-4 rounded-3xl'>
                    <input className='w-full text-lg outline-none bg-inherit'
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder='Search the web privately...' 
                    />
                    <div className='flex items-center gap-3 cursor-pointer'>
                        {text && <span onClick={() => setText("")} className="material-symbols-outlined dark:text-light-black dark:hover:border-0 text-light-grey text-3xl hover:border border-light-grey px-1 py-0 rounded-md hover:shadow-md">close</span>}
                        <span className="material-symbols-outlined text-red text-3xl">search</span>
                        
                    </div>
                   
                </div>
                <div onClick={() => setDark(!dark)}>
                    {!dark ? <img src={lightTheme} alt="light" /> : <img src={darkTheme} alt="dark" />}
                </div>
            </nav>
            <div className='flex items-center p justify-center dark:text-dark-light text-text-grey text-xl gap-6 mb-2'>
                <NavLink to={'/web'} style={({ isActive }) => ({ color: isActive ? '#DB3E25' : 'inherit', fontWeight: isActive? '700' : '400' })}>
                    <div className='flex items-center'>
                    <span className="material-symbols-outlined">search</span>
                    All
                    </div>
                </NavLink>
                <NavLink to={'/images'} style={({ isActive }) => ({ color: isActive ? '#DB3E25' : 'inherit', fontWeight: isActive? '700' : '400' })}>
                <div className='flex items-center '>
                    <span className="material-symbols-outlined">imagesmode</span>
                    Images
                </div>
                </NavLink>
                <NavLink to={'/news'} style={({ isActive }) => ({ color: isActive ? '#DB3E25' : 'inherit', fontWeight: isActive? '700' : '400' })}>
                    <div className='flex items-center '>
                        <span className="material-symbols-outlined">news</span>
                        News
                    </div>
                </NavLink>
                <NavLink to={'/videos'} style={({ isActive }) => ({ color: isActive ? '#DB3E25' : 'inherit', fontWeight: isActive? '700' : '400' })}>
                    <div className='flex items-center '>
                        <span className="material-symbols-outlined">animated_images</span>
                        Videos
                    </div>
                </NavLink>
            </div>
        </header>
        <hr className='bg-light-grey dark:bg-dark-border h-[0.5px] border-0' />
        </>
    );
}

export default Navbar;
