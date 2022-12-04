import {Component} from "react"
import './App.css';

import {CardList} from  "./component/cardl-ist/card-list"
import { SearchBox } from "./component/search-box/search-box.component";
import {Usercount} from "./component/userscount/usercount.component"


class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters : [
        {
          name: "Rhoda"
        },
        {
          name: "samuel"
        },
        {
          name: "james"
        },
        {
          name: "chucks"
        },
        {
          name: "micheal smith"
        },
        {
          name: "olamide bola"
        },
      ],
      searchfield: '',
      showChild: true,
      currentstate: "Hide"
    }
  }

  componentDidMount (){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then(user => this.setState({monsters: user}))
  }

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({searchfield: e.target.value})
    
  }


  render () {
    const {monsters, searchfield} = this.state
    const filteredlist = monsters.filter((monster) => monster.name.toLowerCase().includes(searchfield.toLowerCase()) )

    return (
    <div className="App">
      <h1>Users Rolex</h1>
      <div><button className="buttn" onClick={() => {
        this.setState({showChild: !this.state.showChild})
      }}>{this.state.showChild ? "Hide" : "Show"} cards</button></div>
      <SearchBox placeholder="search monster" handleChange= {this.handleChange} />
      <Usercount count= {filteredlist}/>
      {this.state.showChild ? <CardList monster={filteredlist} /> : null}
    </div>
    )
  }

}

export default App;
