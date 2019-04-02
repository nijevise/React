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
      filteredUsers: [],
      users: [],
      isListView: localStorage.getItem('state') === null || undefined ? true : JSON.parse(localStorage.getItem('state')),
      inputValue: ''
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
    const searchInput = e.target.value

    let filterUsers = null


    if (searchInput !== '') {
      filterUsers = this.state.filteredUsers.filter((user) => {
        return user.fullName.includes(searchInput)
      })
    } else {
      filterUsers = this.state.users
    }

    this.setState({
      filteredUsers: filterUsers,
      inputValue: searchInput
    })

  }

  refreshPage = () => {
    fetchUsers()
      .then(result => {
        this.setState({
          filteredUsers: result,
          users: result
        })
      })
  }

  render() {

    return (
      <div className="App">
        {this.state.isListView ? <Header reload={this.refreshPage} switchView={this.handleSwitchViewClick} title="BIT People" /> : <HeaderGrid reload={this.refreshPage} switchView={this.handleSwitchViewClick} title="BIT People" />}

        <input type="text" value={this.state.inputValue} onChange={this.onSearchChangeInput} />

        {this.state.isListView ? <PostList people={this.state.filteredUsers} isListView={this.state.isListView} /> : <PostGrid people={this.state.filteredUsers} />}
        <Footer title="Copyright &copy;" year="2019" />
      </div>
    );
  }
}

export default App;
