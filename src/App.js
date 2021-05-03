
import './App.css';
import { Component } from 'react';

import { Cardlist } from './components/card-list/card-list.component';
import { Searchbox } from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(users => this.setState({ monsters: users }));

  }
 //test comment
  handleChange =(e) => {
    this.setState({ searchfield: e.target.value } )
  }

  render() {
    const {monsters, searchfield} = this.state;

    const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield));

    return (
      <div className="App">
        <Searchbox
          placeholder='search monsters'
          handleChange={this.handleChange}/>
        
        <Cardlist monsters={filteredmonsters} />
      </div>
    );
  }
}

export default App;
