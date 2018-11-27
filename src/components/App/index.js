import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";
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
                        <Redirect exact from="/" to="/cv-react/" />
                        <Route exact path="/cv-react/" component={Home}/>
                        <Route path="/cv-react/about" component={About}/>
                        <Route exact path="/cv-react/projects" component={Projects}/>
                        <Route path="/cv-react/projects/:id" component={Project}/>
                    </Switch>
                {/*</Fade>*/}
            </section>
        </div>
    )
}
export default App;