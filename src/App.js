import React from 'react';
import './App.css';
import WebApp from './web';
import MobApp from './mobile';
import School from './school/list';
import SchoolClass from './school-class/list';
import ClassSection from './class-section/list';
import Book from './books/list';
import Chapters from './chapters/list';
import VideoDemo from './demo/video';
import CreateSchool from './school/create';
import Story from './shared/story';
// import MobileStory './mobile/stories/stories';


// pages are here 
import ContactUs  from "./pages/contactus";
import AboutUS  from "./pages/aboutus";
import Terms from "./pages/terms";
import Payment from "./pages/payments";
import Volunteer from './pages/volunteer';
// pages are heres


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { isMobile } from "react-device-detect"; 


class App extends React.Component  {

  constructor(props) {
      super(props);
      this.state = {
        isMobile: false
      }
  }


  render (){
    if(isMobile){
      return(
        <Router>
          <Switch>
                <Route path="/school" exact>
                  <School />
                </Route>
                  <Route path="/school/:id/classes" exact component={SchoolClass} />
                  <Route path="/school/classes/:id/sections" exact component={ClassSection} />
                  <Route path="/school/classes/sections/:id/book" exact component={Book} />
                  <Route path="/school/classes/sections/book/:id/chapters" exact component={Chapters} />
                  <Route path="/demo" exact component={VideoDemo} />
                  <Route path="/register" exact component={CreateSchool} />
                  <Route path="/contact-us" exact component={ContactUs} />
                  <Route path="/about" exact component={AboutUS} />
                  <Route path="/terms" exact component={Terms} />
                  <Route path="/privacy" exact component={CreateSchool} />
                  <Route path="/donate-us" exact component={Payment} />
                  <Route path="/volunteer" exact component={Volunteer} />
                  <Route path="/cancellation-return" exact component={CreateSchool} />
                  <Route path="/stories" exact component={Story} />

                  <Route path="/">
                 <MobApp />
                </Route>
            </Switch>
        </Router>
      )
    } else {
      return (
          <Router>
            <Switch>
              <Route path="/school" exact>
                <School />
              </Route>
              <Route path="/school/:id/classes" exact component={SchoolClass} />
              <Route path="/school/classes/:id/sections" exact component={ClassSection} />
              <Route path="/school/classes/sections/:id/book" exact component={Book} />
              <Route path="/school/classes/sections/book/:id/chapters" exact component={Chapters} />
              <Route path="/demo" exact component={VideoDemo} />
              <Route path="/register" exact component={CreateSchool} />
              
              <Route path="/stories" exact component={Story} />
              
              <Route path="/contact-us" exact component={ContactUs} />
              <Route path="/about" exact component={AboutUS} />
              <Route path="/terms" exact component={Terms} />
              <Route path="/privacy" exact component={CreateSchool} />
              <Route path="/donate-us" exact component={Payment} />
              <Route path="/volunteer" exact component={Volunteer} />

              <Route path="/cancellation-return" exact component={CreateSchool} />

              <Route path="/">
                <WebApp />
              </Route>
            </Switch>
          </Router>
        );
    }
  }

}

export default App;
