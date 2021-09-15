import React from 'react';
// import Sidebar from '../partials/Sidebar';
// import Article from '../partials/Article';
import Logo from '../components/Logo';
import About from '../components/About';
import Yoga1 from './Yoga1.jpg';

class Home extends React.Component
{
    render()
    {
        return (
            <div className="bg-cover bg-center bg-fixed" style={{backgroundImage: 'url(' + Yoga1 + ')'}}>
                <section className="flex h-screen">
                    <Logo />
                </section>
                <section className="flex p-4 lg:p-20 bg-gray-50">
                    <About />
                </section>
                <section className="flex h-screen p-4 lg:p-20 bg-gray-100">
                    <About />
                </section>
            </div>
        )
    }
}

export default Home;
