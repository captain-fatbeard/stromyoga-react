import React, { useState, useEffect, useRef } from 'react'
import {Link} from "react-router-dom"
import { withRouter } from "react-router"
import blackLogo from './../assets/black-low-res.png'


export const Menu = () => {

    const [isSticky, setSticky] = useState(false)
    const ref = useRef(null)
    const handleScroll = () => {
        if (ref && ref.current && ref.current.getBoundingClientRect()) {
            // Then, we compare the distance of the ref component to the top
            // with top value we set. If less than, we set isStick ture.
            setSticky(ref.current.getBoundingClientRect().top <= 0)
        }
    }

    const [navbarOpen, setNavbarOpen] = useState(false)
    const [yogaDropdownVisible, setYogaDropdownVisible] = useState(false)

    useEffect(() => {
        // Add scroll event when the component is loaded
        window.addEventListener('scroll', handleScroll)
        return () => {
        // Remove scroll event after the component is unmount,
        // like componentWillUnmount()
          window.removeEventListener('scroll', () => handleScroll)
        }
        // Here, we set useEffect() arguments as empty array.
        // This means useEffect() will only run once after component loaded
    }, [])

    const toggleNavbar = () => {
        if (navbarOpen) setNavbarOpen(false)
        else setNavbarOpen(true)
    }

    const toggleYogaDropdown = () => {
        if (yogaDropdownVisible) setYogaDropdownVisible(false)
        else setYogaDropdownVisible(true)
    }


    return (
        <nav className={'w-full z-50 transition-all ' + (isSticky ? 'fixed top-0 bg-white' : 'fixed top-0 bg-white')} ref={ref}>
        {/* <nav className={'w-full z-50 transition-all ' + (isSticky ? 'fixed top-0 bg-white' : 'absolute bottom-20')} ref={ref}> */}
            <div className="flex flex-wrap justify-center px-4 py-2 font-semibold">

                <div className="absolute inset-0 bg-center bg-no-repeat bg-contain lg:hidden" style={{backgroundImage: 'url(' + blackLogo + ')'}}></div>

                {/* toggle button */}
                <button onClick={toggleNavbar} className="z-50 lg:hidden inline-flex items-center justify-center border h-10 w-10 rounded-md outline-none focus:outline-none ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* menu */}
                <div className={'z-50 w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0 ' + (navbarOpen ? '' : 'hidden')}>
                    <ul className="w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                        <li>
                            <Link onClick={toggleNavbar} to="/" className="flex py-2 px-4 hover:text-gray-200" href="#">Strømyoga</Link>
                        </li>
                        <li onMouseLeave={toggleYogaDropdown} onMouseEnter={toggleYogaDropdown} className="relative">
                            <button className="font-semibold flex w-full py-2 px-4 hover:text-gray-400 outline-none focus:outline-none">Yoga</button>

                            <div className={'lg:absolute left-0 px-4 py-2 bg-pink-200 rounded-lg ' + (yogaDropdownVisible ? '' : 'hidden')}>
                                <ul className="space-y-2 lg:w-48">
                                    <li><Link onClick={toggleNavbar} to="/alignment-yoga" className="flex py-2 hover:text-gray-400">Alignment yoga</Link></li>
                                    <li><Link onClick={toggleNavbar} to="/cocktail-beer-yoga" className="flex py-2 hover:text-gray-400">Cocktail / beer yoga</Link></li>
                                    <li><Link onClick={toggleNavbar} to="/1-1-yoga" className="flex py-2 hover:text-gray-400">1:1 yoga</Link></li>
                                    <li><Link onClick={toggleNavbar} to="/skema-bookning" className="flex py-2 hover:text-gray-400">Skema / bookning</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link onClick={toggleNavbar} to="/bjørneyoga" className="flex py-2 px-4 hover:text-gray-200" href="#">Bjørneyoga</Link>
                        </li>
                        <li>
                            <Link onClick={toggleNavbar} to="/yokao" className="flex py-2 px-4 hover:text-gray-200" href="#">Yo'kao</Link>
                        </li>
                        <li>
                            <Link onClick={toggleNavbar} to="/køb-kakao" className="flex py-2 px-4 hover:text-gray-200" href="#">Køb Kakao</Link>
                        </li>
                        <li>
                            <Link onClick={toggleNavbar} to="/yoga-bibliotek" className="flex py-2 px-4 hover:text-gray-200" href="#">Yoga Bibliotek</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Menu)
