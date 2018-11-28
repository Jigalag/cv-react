import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../../components/Header';
import Home from '../HomePage';
import About from '../AboutPage';
import Contact from '../ContactPage';
import Work from '../WorkPage';
import Projects from '../ProjectsPage';
import Project from '../ProjectPage';
import '../../assets/css/fonts/stylesheet.css';
import '../../assets/css/style.css';
import '../../assets/css/all.min.css';
import Footer from "../Footer";
import {createStore} from "redux";
import cv from "../../reducers"
import {Provider} from "react-redux";

const store = createStore(cv);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <section className="mainWrapper">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route exact path="/projects" component={Projects}/>
                            <Route path="/projects/:id" component={Project}/>
                            <Route path="/work" component={Work}/>
                            <Route path="/contact" component={Contact}/>
                        </Switch>
                    </section>
                    <Footer/>
                </div>
            </Provider>
        )
    }
}
export default App;