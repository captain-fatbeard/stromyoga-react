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
                <About />
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
