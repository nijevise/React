import React, { Component } from 'react';
import fetchUsers from './services/UsersService';
import PostList from './entities/PostList';
import Header from './entities/Header';
import Footer from './entities/Footer';
import PostGrid from './entities/PostGrid';
import HeaderGrid from './entities/HeaderGrid';
import About from './entities/About';
import { HashRouter, Route } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      isListView: localStorage.getItem('state') === null || undefined ? true : JSON.parse(localStorage.getItem('state'))
    }
  }



  handleSwitchViewClick = () => {
    this.setState((prevState) => {
      localStorage.setItem('state', JSON.stringify(!prevState.isListView))
      return {
        isListView: !prevState.isListView,
      }
    })
  }

  refreshPage = () => {
    fetchUsers()
      .then(result => {
        this.setState({
          users: result
        })
      })
  }

  componentDidMount() {
    this.refreshPage()
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" render={props => (
            <React.Fragment>
              {this.state.isListView ? <Header reload={this.refreshPage} switchView={this.handleSwitchViewClick} title="BIT People" /> : <HeaderGrid reload={this.refreshPage} switchView={this.handleSwitchViewClick} title="BIT People" />}
              {this.state.isListView ? <PostList people={this.state.users} isListView={this.state.isListView} /> : <PostGrid people={this.state.users} />}
            </React.Fragment>
          )
          } />
          <Route path="/about" component={About} />
          <Footer title="Copyright &copy;" year="2019" />
        </div >
      </HashRouter>


    );
  }
}

export default App;
