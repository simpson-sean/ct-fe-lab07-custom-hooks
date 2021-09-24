import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RickAndMortyContainer from '../../containers/RickAndMortyContainer';
import RickAndMortyDetailsContainer from '../../containers/RickAndMortyDetailsContainer';
import Header from '../Header';

export default function App() {
  return <>
    <Router>
      <Header />
      <Switch>
      <Route exact path="/:id"><RickAndMortyDetailsContainer /></Route>     
      <Route exact path="/"><RickAndMortyContainer /></Route>
      </Switch>    
    </Router>
  </>

}


