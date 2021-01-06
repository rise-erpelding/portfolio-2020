import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './sass/main.scss';
import NavBar from './components/NavBar/NavBar';
import Hero from './routes/Hero/Hero';
import About from './routes/About/About';
import Projects from './routes/Projects/Projects';
import Resume from './routes/Resume/Resume';
import Contact from './routes/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App__content">
        <Switch>
          <Route
            exact
            path="/"
            component={Hero}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/projects"
            component={Projects}
          />
          <Route
            path="/resume"
            component={Resume}
          />
          <Route
            path="/contact"
            component={Contact}
          />
        </Switch>

        <Footer />
      </div>
    </div>
  );
}

export default App;
