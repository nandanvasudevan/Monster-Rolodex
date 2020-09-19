import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/CardList/cardList.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Monster1",
          id: "mon1",
        },
      ],
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
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
