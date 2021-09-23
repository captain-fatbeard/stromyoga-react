import React from 'react'
import About from '../components/About/About'
import Kakao1 from '../assets/Kakao1.jpg'
import ShopItem from './../components/ShopItem'
import { useInView } from 'react-hook-inview'

export const KoebKakao = () => {
    const [ref, isVisible] = useInView()

    return (
        <>
            <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(' + Kakao1 + ')'}}>
                <section className="h-screen flex items-center">
                    <h1 className="text-7xl mb-8 full-width-headline text-white font-black">Køb kakao</h1>
                </section>

                <section className="flex p-4 lg:p-20 bg-gray-50">
                    <div className={'container flex flex-wrap justify-center transition-all delay-200 duration-1000 ' + (isVisible ? '' : 'opacity-0')} ref={ref}>

                            {/* To bokse med en lille og stor pose kakao + pris. Klik på den og kom direkte til betaling – eller blot skriv at der overføres via mobilepay: 26 28 43 89 */}

                            <ShopItem cartTitle="Lille pose kakao" priceTag="129,-" />
                            <ShopItem cartTitle="Stor pose kakao" priceTag="375,-" />
                            {/* <Cart cartTitle="Køb Kakao" img="https://picsum.photos/600/400/?random" link="køb-kakao"/> */}
                     
                    </div>
                </section>

                <section className="flex p-4 lg:p-20 bg-gray-50">
                    <About
                        headline="Hvad er ceremoniel kakao?"
                        body={<>
                            <p>Aliquam erat volutpat. Donec suscipit purus eu elit sagittis, eu maximus tortor molestie. Suspendisse lobortis finibus quam. Quisque ac sodales nunc. Sed aliquet pulvinar odio, in ullamcorper nisi viverra vel. Nam commodo vel dolor sit amet dapibus. Mauris eget aliquam diam. Duis et porttitor enim.</p>
                        </>}
                    />
                </section>
            </div>
        </>
    )
}

export default KoebKakao;
