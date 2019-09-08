import React, {Component} from 'react';
import './App.css';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


class App extends Component{
  state = {
    recipes : '',
    url : "https://www.themealdb.com/api/json/v1/1/categories.php"
  };

  async getRecipes(){
    try{
      const data = await fetch(this.state.url);
      const jsonData = data.json();
      this.setState({
        recipes : jsonData.categories
      })
    }catch(error){
      console.log(error)
    }
    
  }
  componentDidMount(){
    this.getRecipes();
  }


  render(){
      console.log(this.state.recipes);
  return (
    <React.Fragment>
      <RecipeList/>
      <RecipeDetails/>
    </React.Fragment>
  );
  }
}

export default App;
