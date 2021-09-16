import React from 'react'
import {Link} from "react-router-dom"

export const Cart = ({cartTitle, img, link}) => {

    return (
        <>
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <Link to={link}>
                    <article className="overflow-hidden rounded-lg shadow-lg">
                
                            <img alt="Placeholder" className="block h-auto w-full" src={img} />
        

                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 className="text-lg">
                                {cartTitle}
                            </h1>
                        </header>
                    </article>
                </Link>
            </div>
        </>
    )
}

export default Cart
