import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/CardList/cardList.component";
import { SearchBox } from "./components/SearchBox/searchBox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: "",
    };

    /* This handler function since being called from render, does not by default have access to the "App" context.
        As a result it cannot set the state.
        To set it's context to "App", we bind it to the "App" context here (in the constructor).
        This is necessary since setting the state in render function is a really bad idea.
        To avoid bind() on all functions, we can leverage an important property of ES6 arrow function syntax which is that the context of the function is set in whichever context it was declared in, not called from.
      */
    // this.SearchHandler = this.SearchHandler.bind(this);
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

  SearchHandler = (e) => this.setState({ searchString: e.target.value });

  /*
  Requires you to bind the function to "this" of the "App" context explicitly.
  SearchHandler(e) {
    this.setState({ searchString: e.target.value });
  }
  */

  render() {
    const { monsters, searchString } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    );

    /*
    Bad idea! Could invoke deadlock here. 
    The render() will be called when there is a change, which then might cause this to set state, which will result in another render and so on.

    const SearchHandler = (e) => {
      this.setState({ searchString: e.target.value });
    }; */

    return (
      <div className="App">
        <h1>Monsters' Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handler={this.SearchHandler} />
        <CardList monsters={filteredMonsters} />
        <h1>{filteredMonsters.length === 0 ? "No results" : ""}</h1>
      </div>
    );
  }
}

export default App;
