import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListPage from './components/ListPage';
import DetailsPage from './components/DetailsPage';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" Component={ListPage} />
      <Route path="/details/:movieId" Component={DetailsPage} />
    </Router>
  );
};

export default App;
