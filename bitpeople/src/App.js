import React, { Component } from 'react';
import fetchUsers from './services/UsersService';
import PostList from './entities/PostList';
import Header from './entities/Header';
import Footer from './entities/Footer';
import PostGrid from './entities/PostGrid';
import HeaderGrid from './entities/HeaderGrid';
import About from './entities/About';
import { HashRouter, Route } from 'react-router-dom';
import AnimateSpin from './entities/SpinKit'
import Message from './entities/Message'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredUsers: [],
      users: [],
      isListView: localStorage.getItem('state') === null || undefined ? true : JSON.parse(localStorage.getItem('state')),
      inputValue: '',
      isLoading: true,
    }
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

  componentDidMount() {
    this.setToLocalStorage()
    this.setState({
      isLoading: false
    })
  }

  refreshPage = () => {
    let date = new Date()
    let lastDate = date - JSON.parse(localStorage.getItem('date'))
    fetchUsers()
      .then(result => {
        localStorage.setItem('users', JSON.stringify(result))
        this.setState({
          users: result,
          filteredUsers: result,

        })
      })
  }


  messageSwitch = () => {
    if (this.state.filteredUsers.length === 0 && this.state.inputValue !== '') {
      return (
        <Message />
      )
    } else {
      return (
        this.state.isListView ? <PostList people={this.state.filteredUsers} isListView={this.state.isListView} /> : <PostGrid people={this.state.filteredUsers} />
      )
    }
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


  setToLocalStorage = () => {
    if (localStorage.getItem('users') === null || localStorage.getItem('users') === undefined) {
      fetchUsers()
        .then(result => {
          localStorage.setItem('users', JSON.stringify(result))
        })

    } else {
      this.setState({
        user: JSON.parse(localStorage.getItem('users')),
        filteredUsers: JSON.parse(localStorage.getItem('users'))
      })
    }
  }


  render() {

    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" render={() => (
            <React.Fragment>
              {this.state.isListView ? <Header reload={this.refreshPage} switchView={this.handleSwitchViewClick} title="BIT People" /> : <HeaderGrid reload={this.refreshPage} switchView={this.handleSwitchViewClick} title="BIT People" />}
              {this.animationSwitch()}
              {this.messageSwitch()}
            </React.Fragment>
          )
          } />
          <Route path="/about" component={About} />
          <Footer title="Copyright &copy;" year="2019" timeStamp={this.state.timeStamp} />
        </div >
      </HashRouter>

    );
  }
}

export default App;
