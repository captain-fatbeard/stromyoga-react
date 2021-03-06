import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import AlignmentYoga from './pages/AlignmentYoga'
import CocktailBeerYoga from './pages/CocktailBeerYoga'
import OneToOneYoga from './pages/OneToOneYoga'
import SkemaBookning from './pages/SkemaBookning'
import Bjoerneyoga from './pages/Bjoerneyoga'
import Yokao from './pages/Yokao'
import KoebKakao from './pages/KoebKakao'
import YogaBibliotek from './pages/YogaBibliotek'
import Opskrifter from './pages/Opskrifter'


const Routes = (props) => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/alignment-yoga" component={AlignmentYoga} />
            <Route exact path="/cocktail-beer-yoga" component={CocktailBeerYoga} />
            <Route exact path="/1-1-yoga" component={OneToOneYoga} />
            <Route exact path="/skema-bookning" component={SkemaBookning} />
            <Route exact path="/bjørneyoga" component={Bjoerneyoga} />
            <Route exact path="/yokao" component={Yokao} />
            <Route exact path="/køb-kakao" component={KoebKakao} />
            <Route exact path="/yoga-bibliotek" component={YogaBibliotek} />
            <Route exact path="/opskrifter" component={Opskrifter} />
            {/* <Route path="/category/:id/:slug" component={Category} />
            <Route path="/tag/:id/:title" component={Tag} />
            <Route path="/p/:id/:slug" component={Post} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} /> */}
        </Switch>
    )
};

export default Routes
