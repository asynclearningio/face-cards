import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {  
      persons: [],
      searchField: '' 
    };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const persons = await response.json();
    this.setState({ persons: persons}); 
  }

  render() {

    const { persons, searchField } = this.state; 
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <input type="search" placeholder="search persons" onChange={e => {
          this.setState({ searchField: e.target.value }, () => console.log(this.state));
        }} />
        <CardList persons={filteredPersons} />
      </div>
    );
  }

}

export default App;
