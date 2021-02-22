import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import ReactProj from '../components/pages/ReactProj';
import Capstone from '../components/pages/Capstone';
import Portfolio from '../components/pages/Portfolio';
import Team404 from '../components/pages/Team404';
import ScrollToTop from '../scripts/ScrollToTop';

// Pages
import About from '../components/pages/About';
import Projects from '../components/pages/Projects';

const AppRouter = () => (
    <Router basename={'KCoime'}>
        <ScrollToTop>
            <Switch>
                {/* Main Page Pages */}
                
                <Route path="/" exact><Home/></Route>
                {/* <Route path="/about"><About /></Route>
                <Route path="/projects"><Projects /></Route> */}

                {/* Individual Project Pages */}

                <Route path="/react"><ReactProj/></Route>
                <Route path="/capstone"><Capstone/></Route>
                <Route path="/portfolio"><Portfolio/></Route>
                <Route path="/*"><Team404/></Route>
            </Switch>
        </ScrollToTop>
    </Router>
);

export default AppRouter;