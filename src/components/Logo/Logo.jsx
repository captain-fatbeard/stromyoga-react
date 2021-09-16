import React from 'react'
import blackLogo from './black-low-res.png';

export const Logo = () => {

    return (
        <>
            <img className="w-full h-auto absolute z-0 pointer-events-none" src={blackLogo} alt="Logo" />
        </>
    )
}

export default (Logo)
