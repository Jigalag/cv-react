import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../../components/Header';
import Home from '../../components/Home';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Project from '../../components/Project';
import '../../assets/css/fonts/stylesheet.css';
import '../../assets/css/style.css';

function App() {
    return (
        <div>
            <Header />
            <section className="mainWrapper">
                {/*<Fade>*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route path="/projects/:id" component={Project}/>
                    </Switch>
                {/*</Fade>*/}
            </section>
        </div>
    )
}
export default App;