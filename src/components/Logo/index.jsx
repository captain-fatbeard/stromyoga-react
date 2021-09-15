import React from 'react'
import blackLogo from './black-low-res.png';
// import {Link} from "react-router-dom"

class Logo extends React.Component
{
    render()
    {
        return (
            <img className="w-full h-auto absolute z-0" src={blackLogo} alt="Logo" />
        )
    }
}

export default (Logo)
