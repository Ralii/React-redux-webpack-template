import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExampleContainer from '../exampleStructure/exampleContainer';

const Root = () => {
  return (
    <Router>
      <Route path="/" component={ExampleContainer} />
    </Router>
  );
};

export default Root;

