import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Home from '../components/pages/Home';
import Portfolio from '../components/pages/Portfolio';
import Team404 from '../components/pages/Team404';
import Footer from '../components/Footer';
const AppRouter = () => (
    <Router basename={'KCoime'}>
        <Header/>
            <Switch>
                <Route path="/" exact><Home/></Route>
                <Route path="/portfolio"><Portfolio/></Route>
                <Route path="/*"><Team404/></Route>
            </Switch>
        <Footer/>
    </Router>
);

export default AppRouter;