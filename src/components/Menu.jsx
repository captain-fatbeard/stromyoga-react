// eslint-disable-next-line
import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { withRouter } from "react-router"


export const Menu = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)
    const [yogaDropdownVisible, setYogaDropdownVisible] = useState(false)

    // useEffect(() => {
    //     this.state = {
    //         navbarOpen: false,
    //         dropdownVisible: false
    //     };
    // }, [])

    const toggleNavbar = () => {
        if (navbarOpen) setNavbarOpen(false)
        else setNavbarOpen(true)
    }

    const toggleYogaDropdown = () => {
        if (yogaDropdownVisible) setYogaDropdownVisible(false)
        else setYogaDropdownVisible(true)
    }


    return (
        <nav className="w-full z-50 fixed">
            <div className="flex flex-wrap justify-center px-4 py-2 bg-pink-200">

                {/* toggle button */}
                <button onClick={toggleNavbar} className="lg:hidden inline-flex items-center justify-center border h-10 w-10 rounded-md outline-none focus:outline-none ml-auto">-</button>

                {/* menu */}
                <div className={'w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0 ' + (navbarOpen ? '' : 'hidden')}>
                    <ul className="w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                        <li>
                            <Link to="/" className="flex py-2 px-4 hover:text-gray-200" href="#">Strømyoga</Link>
                        </li>
                        <li onMouseLeave={toggleYogaDropdown} onMouseEnter={toggleYogaDropdown} className="relative">
                            <button className="flex w-full py-2 px-4 hover:text-gray-400 outline-none focus:outline-none">Yoga</button>

                            <div className={'lg:absolute left-0 px-4 py-2 bg-pink-200 ' + (yogaDropdownVisible ? '' : 'hidden')}>
                                <ul className="space-y-2 lg:w-48">
                                    <li><Link to="/alignment-yoga" className="flex py-2 hover:text-gray-400">Alignment yoga</Link></li>
                                    <li><Link to="/cocktail-beer-yoga" className="flex py-2 hover:text-gray-400">Cocktail / beer yoga</Link></li>
                                    <li><Link to="/yoga-dyb-afspænding" className="flex py-2 hover:text-gray-400">Yoga + dyb afspænding m/u krystaller</Link></li>
                                    <li><Link to="/skema-bookning" className="flex py-2 hover:text-gray-400">Skema / bookning</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="/børneyoga" className="flex py-2 px-4 hover:text-gray-200" href="#">Børneyoga</Link>
                        </li>
                        <li>
                            <Link to="/yokao" className="flex py-2 px-4 hover:text-gray-200" href="#">Yo'kao</Link>
                        </li>
                        <li>
                            <Link to="/køb-kakao" className="flex py-2 px-4 hover:text-gray-200" href="#">Køb Kakao</Link>
                        </li>
                        <li>
                            <Link to="/yoga-bibliotek" className="flex py-2 px-4 hover:text-gray-200" href="#">Yoga Bibliotek</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Menu)
