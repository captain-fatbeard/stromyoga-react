import React from 'react';
import Logo from '../components/Logo/Logo';
import About from '../components/About/About';
import Yoga1 from '../assets/Yoga1.jpg';
import CartList from '../components/Carts/CartList';

export const Home = () => {
    return (
        <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(' + Yoga1 + ')'}}>
            <section className="flex h-screen">
                <Logo />
            </section>
            <section className="flex p-4 lg:p-20 bg-gray-50">
                <About
                    headline="Om Strømyoga"
                    body={<>
                        <p>Aliquam erat volutpat. Donec suscipit purus eu elit sagittis, eu maximus tortor molestie. Suspendisse lobortis finibus quam. Quisque ac sodales nunc. Sed aliquet pulvinar odio, in ullamcorper nisi viverra vel. Nam commodo vel dolor sit amet dapibus. Mauris eget aliquam diam. Duis et porttitor enim.</p>
                        <p>Praesent in semper magna. Morbi placerat odio risus, sit amet tempus leo egestas sed. Nam feugiat vitae nisi a maximus. Duis a nisi elit. In hac habitasse platea dictumst. Aliquam sed ligula diam. Mauris placerat magna ut lorem bibendum commodo. Nunc laoreet purus sit amet nulla blandit, eu euismod odio laoreet. Sed suscipit nunc quis nunc scelerisque, eget malesuada felis mattis. Morbi volutpat ante ac accumsan pretium. Proin cursus sollicitudin sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi iaculis ex eget diam congue, a finibus neque molestie.</p>
                    </>}
                />
            </section>
            {/* <section className="flex h-screen p-4 lg:p-20 bg-gray-100">
                <About />
            </section> */}
            <section className="flex p-4 lg:p-20 bg-gray-50">
                <CartList />
            </section>
        </div>
    )
}

export default Home;
