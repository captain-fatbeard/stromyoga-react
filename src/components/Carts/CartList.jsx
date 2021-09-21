import React from 'react'
import Cart from './Cart'
import { useInView } from 'react-hook-inview'

export const CartGrid = () => {
    const [ref, isVisible] = useInView()

    return (
        <>
            <div className={'container my-12 mx-auto px-4 md:px-12 transition-all delay-200 duration-1000 ' + (isVisible ? '' : 'opacity-0')} ref={ref}>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <Cart cartTitle="Yogabibliotek" img="https://picsum.photos/600/400/?random" link="yoga-bibliotek"/>
                    <Cart cartTitle="Køb Kakao" img="https://picsum.photos/600/400/?random" link="køb-kakao"/>
                    <Cart cartTitle="Yo'kao" img="https://picsum.photos/600/400/?random" link="yokao"/>
                    <Cart cartTitle="Bjørneyoga" img="https://picsum.photos/600/400/?random" link="bjørneyoga"/>
                    <Cart cartTitle="Opskrifter" img="https://picsum.photos/600/400/?random" link="opskrifter"/>
                </div>
            </div>
        </>
    )
    
}

export default CartGrid
