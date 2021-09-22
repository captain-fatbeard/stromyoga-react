import React from 'react';
import About from '../components/About/About';
import Yoga7 from '../assets/Yoga7.jpg';

export const AlignmentYoga = () => {
    return (
        <>
            <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(' + Yoga7 + ')'}}>
                <section className="h-screen flex items-center">
                    <div className="text">
                        <h1 className="text-9xl mb-8 text-white font-black">Alignment Yoga</h1>
                        <h5 className="text-7xl mb-8 text-white font-black">(I drivhus el. under åben himmel)</h5>
                    </div>
                </section>
                <section className="flex p-4 lg:p-20 bg-gray-50">
                    <About
                        headline="Om Alignment yoga"
                        body={<>
                            <p>Aliquam erat volutpat. Donec suscipit purus eu elit sagittis, eu maximus tortor molestie. Suspendisse lobortis finibus quam. Quisque ac sodales nunc. Sed aliquet pulvinar odio, in ullamcorper nisi viverra vel. Nam commodo vel dolor sit amet dapibus. Mauris eget aliquam diam. Duis et porttitor enim.</p>
                        </>}
                    />
                </section>
            </div>
        </>
    )
}

export default AlignmentYoga;
