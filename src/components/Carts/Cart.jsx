import React from 'react'
import {Link} from "react-router-dom"

export const Cart = ({cartTitle, img, link, itemInRow}) => {

    return (
        <>
            <div className={'my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/'+itemInRow}> 
                <Link to={link}>
                    <article className="flex flex-wrap justify-center content-center h-80 rounded-lg shadow-lg p-4 bg-cover" style={{backgroundImage: 'url(' + img + ')'}}>
                

                        {/* <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-pink-100"> */}
                            <div className="text-5xl text-white font-bold">
                                {cartTitle}
                            </div>
                        {/* </header> */}
                    </article>
                </Link>
            </div>
        </>
    )
}

export default Cart
