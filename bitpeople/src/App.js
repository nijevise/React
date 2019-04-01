import React, { Component } from 'react';
import fetchUsers from './services/UsersService'
import PostList from './entities/PostList'
import Header from './entities/Header'
import Footer from './entities/Footer'
import PostGrid from './entities/PostGrid'
import HeaderGrid from './entities/HeaderGrid'


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

  refrashPage = () => {
    fetchUsers()
      .then(result => {
        this.setState({
          users: result
        })
      })
  }

  componentDidMount() {
    this.refrashPage()
  }

  render() {
    return (

      <div className="App">
        {this.state.isListView ? <Header reload={this.refrashPage} switchView={this.handleSwitchViewClick} title="BIT People" /> : <HeaderGrid reload={this.refrashPage} switchView={this.handleSwitchViewClick} title="BIT People" />}
        {this.state.isListView ? <PostList people={this.state.users} isListView={this.state.isListView} /> : <PostGrid people={this.state.users} />}
        <Footer title="Copyright &copy;" year="2019" />
      </div>
    );
  }
}

export default App;
