import React from 'react';
import About from '../components/About/About';
import Kakao2 from '../assets/Kakao2.jpg';

export const Yokao = () => {
    return (
        <>
            <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(' + Kakao2 + ')'}}>
                <section className="h-screen flex items-center">
                    <h1 className="text-7xl mb-8">Yo’kao</h1>
                </section>
                <section className="flex p-4 lg:p-20 bg-gray-50">
                    <About
                        headline="Hvad er Yo'kao"
                        body={<>
                            <p>Aliquam erat volutpat. Donec suscipit purus eu elit sagittis, eu maximus tortor molestie. Suspendisse lobortis finibus quam. Quisque ac sodales nunc. Sed aliquet pulvinar odio, in ullamcorper nisi viverra vel. Nam commodo vel dolor sit amet dapibus. Mauris eget aliquam diam. Duis et porttitor enim.</p>
                        </>}
                    />
                </section>
                <section className="flex p-4 lg:p-20 bg-gray-50">
                    <About
                        headline="Hvad er ceremoniel Kakoa?"
                        body={<>
                            <p>Aliquam erat volutpat. Donec suscipit purus eu elit sagittis, eu maximus tortor molestie. Suspendisse lobortis finibus quam. Quisque ac sodales nunc. Sed aliquet pulvinar odio, in ullamcorper nisi viverra vel. Nam commodo vel dolor sit amet dapibus. Mauris eget aliquam diam. Duis et porttitor enim.</p>
                        </>}
                    />
                </section>
            </div>
        </>
    )
}

export default Yokao;
