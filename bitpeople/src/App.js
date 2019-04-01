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
      isListView: true
    }
  }



  handleSwitchViewClick = () => {
    this.setState((prevState) => {
      return { isListView: !prevState.isListView }
    })
  }

  refrashPage = () => {
    window.location.reload()
  }

  componentDidMount() {
    fetchUsers()
      .then(result => {
        this.setState({
          users: result
        })
      })
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
