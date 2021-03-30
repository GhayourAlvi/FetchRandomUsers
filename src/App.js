import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true
        });
      });
  }
  render() {
    var { items, loading } = this.state;
    if (!loading) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    } else {
      return (
        <div className="Container">
          <h1>Users</h1>
          {items.map((item) => (
            <div>
              <li>
                <ol>
                  {item.name.first}
                  <img src={item.picture.medium} alt={item.name.first} />
                </ol>
              </li>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default App;
