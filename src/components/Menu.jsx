// eslint-disable-next-line
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { withRouter } from "react-router"
// import GlobalContext from '../../GlobalContext'
// import "../../css/form.css"
// import Auth from '../../apis/Auth'
class Menu extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            navbarOpen: false,
            dropdownVisible: false
        };
    }

    toggleNavbar = () => {
        this.setState(prevState => ({
            navbarOpen: !prevState.navbarOpen
        }))
    }

    toggleDropdown = () => {
        this.setState(prevState => ({
            dropdownVisible: !prevState.dropdownVisible
        }))
    }

    render()
    {
        return (
            <nav className="w-full z-50 fixed">
                <div className="flex flex-wrap justify-center px-4 py-2 bg-pink-200">

                    {/* toggle button */}
                    <button onClick={this.toggleNavbar} className="lg:hidden inline-flex items-center justify-center border h-10 w-10 rounded-md outline-none focus:outline-none ml-auto">-</button>

                    {/* menu */}
                    <div className={'w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0 ' + (this.state.navbarOpen ? '' : 'hidden')}>
                        <ul className="w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2">
                            <li onMouseLeave={this.toggleDropdown} onMouseEnter={this.toggleDropdown} className="relative">
                                <button className="flex w-full py-2 px-4 hover:text-gray-400 outline-none focus:outline-none">Yoga</button>

                                <div className={'lg:absolute left-0 px-4 py-2 bg-pink-200 ' + (this.state.dropdownVisible ? '' : 'hidden')}>
                                    <ul className="space-y-2 lg:w-48">
                                        <li><Link to="/" className="flex py-2 hover:text-gray-400">Alignment yoga</Link></li>
                                        <li><Link to="/" className="flex py-2 hover:text-gray-400">Cocktail / beer yoga</Link></li>
                                        <li><Link to="/" className="flex py-2 hover:text-gray-400">Yoga + dyb afspænding m/u krystaller</Link></li>
                                        <li><Link to="/" className="flex py-2 hover:text-gray-400">Skema / bookning</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/" className="flex py-2 px-4 hover:text-gray-200" href="#">Børneyoga</Link>
                            </li>
                            <li>
                                <Link to="/" className="flex py-2 px-4 hover:text-gray-200" href="#">Yo'kao</Link>
                            </li>
                            <li>
                                <Link to="/" className="flex py-2 px-4 hover:text-gray-200" href="#">Køb Kakao</Link>
                            </li>
                            <li>
                                <Link to="/" className="flex py-2 px-4 hover:text-gray-200" href="#">Skema / bookning</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Menu)
