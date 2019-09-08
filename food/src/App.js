import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (
    <React.Fragment>
      <RecipeList/>
      <RecipeDetails/>
    </React.Fragment>
  );
}

export default App;
