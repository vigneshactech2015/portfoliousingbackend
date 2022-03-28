import React from 'react';
import './App.css';
import Header from './components/header/Header';
import AboutMe from './components/aboutme/AboutMe';
import Skills from './components/Skills/Skills';
import Certification from './components/certifications/Certification';
import MyWorks from './components/myworks/MyWorks';
import Intro from './Intro/Intro';
import Contact from './components/contact/Contact';
import Home from './components/Home/Home';
import Trainer from './components/dynamic/trainer';
import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Route exact path="/aboutme" component={AboutMe}/>
    <Route exact path="/skills" component={Skills}/>
    <Route exact path="/myworks" component={MyWorks}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/intro" component={Intro}/>
    <Route exact path="/certification" component={Certification}/>
    <Route exact path="/home" component={Home}/>
    <Route exact path="/admin" component={Trainer}/>
    <Header/>
    </Router>
    
    
  )
}

export default App;
