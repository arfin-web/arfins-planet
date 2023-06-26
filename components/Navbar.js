import Link from 'next/link'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

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
                    <h4 className="btn btn-ghost normal-case font-bold text-2xl lg:text-3xl text-primary">
                        <Link href='/planet'>Arfin's<span className='text-secondary'>Planet</span></Link>
                    </h4>
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
                    <select data-choose-theme className="select select-primary select-md rounded-full w-28">
                        <option value="dark" className='text-xl' selected>Dark Mode</option>
                        <option value="light" className='text-xl'>Light Mode</option>
                        <option value='cupcake' className='text-xl'>Cupcake</option>
                        <option value='bumblebee' className='text-xl'>Bumblebee</option>
                        <option value='emerald' className='text-xl'>Emerald</option>
                        <option value='corporate' className='text-xl'>Corporate</option>
                        <option value='synthwave' className='text-xl'>Synthwave</option>
                        <option value='retro' className='text-xl'>Retro</option>
                        <option value='cyberpunk' className='text-xl'>Cyberpunk</option>
                        <option value='valentine' className='text-xl'>Valentine</option>
                        <option value='halloween' className='text-xl'>Halloween</option>
                        <option value='garden' className='text-xl'>Garden</option>
                        <option value='forest' className='text-xl'>Forest</option>
                        <option value='aqua' className='text-xl'>Aqua</option>
                        <option value='lofi' className='text-xl'>Lofi</option>
                        <option value='pastel' className='text-xl'>Pastel</option>
                        <option value='wireframe' className='text-xl'>Wireframe</option>
                        <option value='black' className='text-xl'>Black</option>
                        <option value='luxury' className='text-xl'>Luxury</option>
                        <option value='dracula' className='text-xl'>Dracula</option>
                        <option value='cmyk' className='text-xl'>Cmyk</option>
                        <option value='autumn' className='text-xl'>Autumn</option>
                        <option value='business' className='text-xl'>Business</option>
                        <option value='acid' className='text-xl'>Acid</option>
                        <option value='lemonade' className='text-xl'>Lemonade</option>
                        <option value='emerald' className='text-xl'>Emerald</option>
                        <option value='night' className='text-xl'>Night</option>
                        <option value='coffee' className='text-xl'>Coffee</option>
                        <option value='winter' className='text-xl'>Winter</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Navbar