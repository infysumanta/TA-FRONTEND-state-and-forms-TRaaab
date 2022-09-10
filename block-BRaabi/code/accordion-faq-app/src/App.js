import React, { Component } from "react";
import questions from "./questions";
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: "",
    };
  }

  handleClick = (question) => {
    if (this.state.activeQuestion && this.state.activeQuestion === question) {
      this.setState({
        activeQuestion: "",
      });
    } else {
      this.setState({
        activeQuestion: question,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <ul className="accordion-container">
          {questions.map((question, index) => {
            return (
              <li
                className="accordion-item"
                key={index}
                onClick={() => this.handleClick(question.Q)}
              >
                <div
                  className={
                    this.state.activeQuestion === question.Q
                      ? "question active"
                      : "question"
                  }
                >
                  {question.Q}
                  <span>
                    {this.state.activeQuestion === question.Q ? "👆" : "👇"}
                  </span>
                </div>
                <div
                  className={
                    this.state.activeQuestion === question.Q
                      ? "answer active"
                      : "answer"
                  }
                >
                  {question.A}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
