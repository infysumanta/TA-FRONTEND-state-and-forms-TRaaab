import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      fontSize: 30,
    };
  }
  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  changeSizeBySlider = (event) => {
    this.setState({ fontSize: event.target.value });
  };
  render() {
    let fontArray = [
      "Combo",
      "Creepster",
      "Noto Sans",
      "Orbitron",
      "Pacifico",
      "Paytone One",
      "Poppins",
      "Qwitcher Grypen",
      "Roboto",
      "Smooch",
    ];
    return (
      <div className="container">
        <div className="header">
          <input
            type="text"
            className="font-test-text"
            placeholder="Type Something"
            onChange={this.handleChange}
          />
          <div className="font-size-range">
            Size:
            <input
              type="range"
              min="10"
              max="50"
              placeholder="Size:"
              onChange={this.changeSizeBySlider}
            />
          </div>
        </div>
        <main>
          <div className="grid-container">
            {fontArray.map((font, index) => {
              return (
                <div className="font-block" key={index}>
                  <div className="font-name">{font}</div>
                  <hr />
                  <div
                    className={`font-text font-block-${index} font-size-${this.state.fontSize}`}
                  >
                    {this.state.inputText
                      ? this.state.inputText
                      : "Type Something..."}
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
