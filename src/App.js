import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/CardList/cardList.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    const getUsers = async () => {
      try {
        const userResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await userResponse.json();
        this.setState({ monsters: users });
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }

  render() {
    const { monsters, searchString } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={(e) => this.setState({ searchString: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
        <h1>{filteredMonsters.length == 0 ? "No results" : ""}</h1>
      </div>
    );
  }
}

export default App;
