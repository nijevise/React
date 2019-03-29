import React, { Component } from 'react';
import FetchUsers from './services/UsersService'
import PostList from './entities/PostList'
import Header from './entities/Header'
import Footer from './entities/Footer'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }


  componentDidMount() {
    FetchUsers()
      .then(result => {
        this.setState({
          users: result
        })
      })
  }

  render() {
    return (

      <div className="App">
        <Header title="BIT People" />
        <PostList people={this.state.users} />
        <Footer title="Copyright &copy;" year="2019" />
      </div>
    );
  }
}

export default App;
