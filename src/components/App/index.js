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
import userData from "../../data/about";

class App extends Component {
    constructor(props) {
        super(props);
        this.userData = userData;
    }

    render() {
        return (
            <div>
                <Header />
                <section className="mainWrapper">
                    <Switch>
                        <Route exact path="/" component={() => <Home AboutData={this.userData} />}/>
                        <Route path="/about" component={() => <About AboutData={this.userData} />}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route path="/projects/:id" component={Project}/>
                        <Route path="/work" component={Work}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </section>
                <Footer UserData={this.userData}/>
            </div>
        )
    }
}
export default App;