import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../components/Header';
import Home from '../components/pages/Home';
import Footer from '../components/Footer';
const AppRouter = () => (
    <Router basename={'KCoime'}>
        <Header/>
        <div className="wrapper">
            <Switch>
                <Route path="/" exact><Home/></Route>
            </Switch>
        </div> {/*end of wrapper*/}
        <Footer/>
    </Router>
);

export default AppRouter;