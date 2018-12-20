import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../../components/Header';
import Home from '../../components/HomePage';
import About from '../../components/AboutPage';
import Contact from '../../components/ContactPage';
import Company from '../../components/CompanyPage';
import Projects from '../../components/ProjectsPage';
import Project from '../../components/ProjectPage';
import '../../../assets/styles/style.scss';
import Footer from "../../components/Footer";
import {getUserData} from "../../redux/actions/about";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";

class App extends Component {
    componentDidMount() {
        this.props.getData();
    }
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
                        <Route path="/work" component={Company}/>
                        <Route path="/contact" component={Contact}/>
                    </Switch>
                </section>
                <Footer/>
            </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        userData: state.about
    }
}
function mapDispatchToProps (dispatch) {
    return {
        getData: () => {
            dispatch(getUserData())
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));