import './App.css';
import React from  "react"
import { Cardlist } from './component/cardlist/cardlist';
import { Searchfield } from './component/searchfield/search';

class  App extends React.Component {

  constructor () {
    super();
    this.state = {
      users: [],
      searchfield: ''
    }
  }


  componentDidMount (){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    .then(user => this.setState({users: user}))
  }

  handleChange = (e) => {
        this.setState({searchfield: e.target.value})
  }

  

  render (){

    const {users, searchfield} = this.state

    const filteredlist = users.filter((user) => ( 
      user.name.toLowerCase().includes(searchfield.toLowerCase())

    ))


    return (
      <div className="App">
        <header className="App-header">
          <h1> users Rolodex</h1>
        </header>
        <Searchfield placeHolder="Search users" handleChange={this.handleChange}/>
        <small>No of users: {filteredlist.length}</small>
        <Cardlist users={filteredlist}/>

      </div>
    );
  }
  
}

export default App;
