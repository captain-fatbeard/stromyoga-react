import React from 'react'
import Cart from './Cart'

export const CartGrid = () => {

    return (
        <>
            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <Cart cartTitle="Yogabibliotek" img="https://picsum.photos/600/400/?random" link="yoga-bibliotek"/>
                    <Cart cartTitle="Køb Kakao" img="https://picsum.photos/600/400/?random" link="køb-kakao"/>
                    <Cart cartTitle="Yo'kao" img="https://picsum.photos/600/400/?random" link="yokao"/>
                    <Cart cartTitle="Børneyogaforløb" img="https://picsum.photos/600/400/?random" link="børneyoga"/>
                    <Cart cartTitle="Opskrifter" img="https://picsum.photos/600/400/?random" link="opskrifter"/>
                </div>
            </div>
        </>
    )
    
}

export default CartGrid
