import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './routes/Hero/Hero';
import Projects from './routes/Projects/Projects';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={Hero}
          />
          <Route
            path="/projects"
            component={Projects}
          />
        </Switch>
        <div>
          <FontAwesomeIcon icon="bars" />
          <FontAwesomeIcon icon="envelope" />
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          <FontAwesomeIcon icon={['fab', 'github']} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
