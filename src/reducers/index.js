import {combineReducers} from "redux";
import HomeReducers from './home';
import AboutReducers from './about';
import ProjectsReducers from './projects';
import CompaniesReducers from './companies';
import ContactReducers from './contact';

const cv = combineReducers({
    home: HomeReducers,
    about: AboutReducers,
    projects: ProjectsReducers,
    companies: CompaniesReducers,
    contact: ContactReducers
});

export default cv;