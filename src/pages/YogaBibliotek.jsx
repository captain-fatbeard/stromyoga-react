import React from 'react';
import Youtube from '../components/Youtube';
import Yoga4 from '../assets/Yoga4.jpg';

export const YogaBibliotek = () => {

    return (
        <>
            <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(' + Yoga4 + ')'}}>
                <section className="h-screen flex items-center">
                    <div className="text">
                        <h1 className="text-9xl mb-8 text-white font-black">Yogabibliotek</h1>
                    </div>
                </section>
                <section className="flex p-4 lg:p-20 bg-gray-50">
                    <form action="#" className="mt-2 mx-auto">
                        <div className="flex items-center">
                            <input type="email" placeholder="Søg" className="w-full px-2 py-4 mr-2 bg-gray-50 rounded-md border border-gray-400 focus:outline-none" required />
                            {/* <button className="bg-gray-900 text-gray-100 px-5 py-2 rounded" >Søg</button> */}
                        </div>
                    </form>
                </section>
                <section className="flex p-4 lg:p-20 bg-gray-50">
                    <div className={'container my-12 mx-auto px-4 md:px-12 transition-all delay-200 duration-1000'}>
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">
                            <Youtube videoTitle="Yogafilm" videoSrc="https://www.youtube.com/embed/A0pkEgZiRG4" />
                            <Youtube videoTitle="Yogafilm" videoSrc="https://www.youtube.com/embed/A0pkEgZiRG4" />
                            <Youtube videoTitle="Yogafilm" videoSrc="https://www.youtube.com/embed/A0pkEgZiRG4" />
                            <Youtube videoTitle="Yogafilm" videoSrc="https://www.youtube.com/embed/A0pkEgZiRG4" />
                            <Youtube videoTitle="Yogafilm" videoSrc="https://www.youtube.com/embed/A0pkEgZiRG4" />
                            <Youtube videoTitle="Yogafilm" videoSrc="https://www.youtube.com/embed/A0pkEgZiRG4" />
                            <Youtube videoTitle="Yogafilm" videoSrc="https://www.youtube.com/embed/A0pkEgZiRG4" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default YogaBibliotek;
