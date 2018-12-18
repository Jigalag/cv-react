import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../../components/Header';
import Home from '../../components/HomePage';
import About from '../../components/AboutPage';
import Contact from '../../components/ContactPage';
import Work from '../../components/WorkPage';
import Projects from '../../components/ProjectsPage';
import Project from '../../components/ProjectPage';
import '../../../assets/styles/style.scss';
import Footer from "../../components/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <section className="mainWrapper">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path="/projects/:id" component={Project}/>
                        <Route path="/work" component={Work}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </section>
                <Footer/>
            </div>
        )
    }
}
export default App;