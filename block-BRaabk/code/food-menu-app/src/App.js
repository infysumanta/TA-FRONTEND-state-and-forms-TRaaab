import React, { Component } from "react";
import data from "./data";
import Items from "./Item";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
    };
  }

  handleActive = (menu) => {
    this.setState({
      active: menu.toLowerCase(),
    });
  };

  capitalizeFirstLetter = (string) => {
    return string
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  };

  render() {
    let menuTag = [
      "All",
      ...new Set(data.map((m) => this.capitalizeFirstLetter(m.category))),
    ];
    let menuItem;

    if (!this.state.active || this.state.active === "all") {
      menuItem = data.reduce((acc, item) => {
        acc = acc.concat(item);
        return acc;
      }, []);
    } else {
      menuItem = data.filter((item) => {
        return item.category === this.state.active;
      });
    }
    return (
      <div className="container">
        <header>
          <h1>Our Menu</h1>
          <div className="header-tag">
            {menuTag.map((tag, i) => (
              <span
                onClick={() => this.handleActive(tag)}
                key={i}
                className={
                  tag.toLowerCase() === this.state.active ? "active" : ""
                }
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        <Items menuItem={menuItem} />
      </div>
    );
  }
}

export default App;
