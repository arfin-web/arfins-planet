import Link from 'next/link'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import themes from '../themes'

const Navbar = () => {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])
    return (
        <>
            <div className="navbar bg-base-100 sticky top-0 z-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-base-200 rounded-box w-52 shadow-xl">
                            <li className='text-xl'>
                                <a href='#home'>Home</a>
                            </li>
                            <li className='text-xl'>
                                <a href='#projects'>Projects</a>
                            </li>
                            <li className='text-xl'>
                                <a href='#contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <Link href='/planet' className='font-bold text-2xl lg:text-3xl text-primary'>Arfin's<span className='text-secondary'>Planet</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 bg-base-200 rounded-full shadow-xl">
                        <li className='text-xl'>
                            <a href='#home'>Home</a>
                        </li>
                        <li className='text-xl'>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li className='text-xl'>
                            <a href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <select data-choose-theme className="select select-primary select-sm lg:select-md rounded-full w-28">
                        <option value="dark" className='text-xl' selected>Dark Mode</option>
                        {
                            themes.map((theme) => (
                                <option key={theme.id} value={theme.value} className='text-base lg:text-lg'>{theme.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </>
    )
}

export default Navbar