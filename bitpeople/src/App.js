import React, { Component } from 'react';
import fetchUsers from './services/UsersService'
import PostList from './entities/PostList'
import Header from './entities/Header'
import Footer from './entities/Footer'
import PostGrid from './entities/PostGrid'
import HeaderGrid from './entities/HeaderGrid'
import AnimateSpin from './entities/SpinKit'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredUsers: [],
      users: [],
      isListView: localStorage.getItem('state') === null || undefined ? true : JSON.parse(localStorage.getItem('state')),
      inputValue: '',
      isLoading: true
    }
  }

  componentDidMount() {
    this.refreshPage()
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSwitchViewClick = () => {
    this.setState((prevState) => {
      localStorage.setItem('state', JSON.stringify(!prevState.isListView))
      return {
        isListView: !prevState.isListView,
      }
    })
  }

  onSearchChangeInput = (e) => {

    this.setState({
      filteredUsers: this.state.users.filter(user => (user.firstName.includes(e.target.value) || user.lastName.includes(e.target.value))),
      inputValue: e.target.value
    })
  }

  refreshPage = () => {
    fetchUsers()
      .then(result => {
        this.setState({
          isLoading: false,
          filteredUsers: result,
          users: result
        })
      })
  }

  animationSwitch = () => {
    if (this.state.isLoading) {
      return (
        <AnimateSpin />
      )
    } else {
      return (
        <input placeholder="Search users" type="search" value={this.state.inputValue} onChange={this.onSearchChangeInput} />
      )
    }
  }


  render() {

    return (
      <div className="App">
        {this.state.isListView ? <Header reload={this.refreshPage} switchView={this.handleSwitchViewClick} title="BIT People" /> : <HeaderGrid reload={this.refreshPage} switchView={this.handleSwitchViewClick} title="BIT People" />}
        {this.animationSwitch()}
        {this.state.isListView ? <PostList people={this.state.filteredUsers} isListView={this.state.isListView} /> : <PostGrid people={this.state.filteredUsers} />}
        <Footer title="Copyright &copy;" year="2019" />
      </div>
    );
  }
}

export default App;
