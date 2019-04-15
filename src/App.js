import React, { Component } from 'react';
import './css/App.css';
import Navbar from './Components/Navbar/index' 
import Hero from './Components/Hero/index'
import Skills from './Components/Skills/index'
import Projects from './Components/Projects/index'
import Footer from './Components/Footer/index'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Hero />
       <Skills />
       <Projects />
       <Footer />
      </div>
    );
  }
}

export default App;
