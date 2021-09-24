import React from 'react'
import About from '../components/About/About'
import Product from './../components/Products/Product'
import Cart from './../components/Carts/Cart'
import { useInView } from 'react-hook-inview'

// import assets
import Kakao1 from '../assets/Kakao1.jpg'
import Kakao3 from '../assets/Kakao3.jpg'
import Kakao4 from '../assets/Kakao4.jpg'

export const KoebKakao = () => {
    const [ref, isVisible] = useInView()

    return (
        <>
            <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(' + Kakao1 + ')'}}>
                <section className="h-screen flex items-center">
                    <h1 className="text-7xl mb-8 full-width-headline text-white font-black uppercase">Køb kakao</h1>
                </section>

                <section className="flex p-4 lg:p-20 bg-gray-50">
                    <div className={'container my-12 mx-auto px-4 md:px-12 transition-all delay-200 duration-1000 ' + (isVisible ? '' : 'opacity-0')} ref={ref}>
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                                <Product itemInRow={2} productTitle="Lille pose kakao" productText="100 g." priceTag="129,-" />
                                <Product itemInRow={2} productTitle="Stor pose kakao" productText="500 g." priceTag="375,-" />                    
                        </div>
                    </div>
                </section>

                <section className="flex p-4 lg:p-20 bg-gray-50">
                    <div className={'container my-12 mx-auto px-4 md:px-12 transition-all delay-200 duration-1000 ' + (isVisible ? '' : 'opacity-0')} ref={ref}>
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            <Cart itemInRow={2} cartTitle="Inspiration til benyttelse af kakao" img={Kakao3} link="opskrifter"/>
                            <Cart itemInRow={2} cartTitle="Opskrifter Kakao" img={Kakao4} link="opskrifter"/>
                        </div>
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
