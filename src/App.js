import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import ProjectsHome from './components/Projects/ProjectsHome/ProjectsHome';
import BlogHome from './components/Blog/BlogHome/BlogHome';
import ContactMe from './components/ContactMe/ContactMe';
import Resume from './components/Resume/Resume';
import ScrollToTop from './components/ScrollToTop';


function App() {
  
  return (
    <div id="scroll">
      <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/projects">
          <ProjectsHome/>
        </Route>
        <Route path="/blogs">
          <BlogHome/>
        </Route>
        <Route path="/contact">
          <ContactMe/>
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
