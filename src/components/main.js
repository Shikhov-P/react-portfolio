import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing';
import About from './about';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
        </Switch>
    )
}

export default Main;