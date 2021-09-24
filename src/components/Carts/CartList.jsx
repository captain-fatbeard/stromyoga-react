import React from 'react'
import Cart from './Cart'
import { useInView } from 'react-hook-inview'

// import assets
import Yoga4 from './../../assets/Yoga4.jpg'
import Kakao1 from './../../assets/Kakao1.jpg'
import Kakao2 from './../../assets/Kakao2.jpg'
import Boerneyoga1 from './../../assets/Boerneyoga1.jpg'
import Kystal from './../../assets/Kystal.jpg'

export const CartGrid = () => {
    const [ref, isVisible] = useInView()

    return (
        <>
            <div className={'container my-12 mx-auto px-4 md:px-12 transition-all delay-200 duration-1000 ' + (isVisible ? '' : 'opacity-0')} ref={ref}>
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    <Cart itemInRow={3} cartTitle="Yogabibliotek" img={Yoga4} link="yoga-bibliotek"/>
                    <Cart itemInRow={3} cartTitle="Køb Kakao" img={Kakao1} link="køb-kakao"/>
                    <Cart itemInRow={3} cartTitle="Yo'kao" img={Kakao2} link="yokao"/>
                    <Cart itemInRow={3} cartTitle="Bjørneyoga" img={Boerneyoga1} link="bjørneyoga"/>
                    <Cart itemInRow={3} cartTitle="Opskrifter" img={Kystal} link="opskrifter"/>
                </div>
            </div>
        </>
    )
    
}

export default CartGrid
