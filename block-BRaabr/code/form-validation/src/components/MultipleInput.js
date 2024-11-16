import React, { Component } from "react";

class MultipleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      dateInput: "",
      textarea: "",
    };
    this.fileInput = React.createRef();
  }
  handleChange = ({ target }) => {
    let { name, value } = target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="multiple-input-container">
        <form>
          <div className="form-group">
            <label htmlFor="text">Text Input</label>
            <input
              type="text"
              id="text"
              name="textInput"
              value={this.state.inputText}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Date Input</label>
            <input
              type="date"
              id="date"
              name="dateInput"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">File Input: </label>
            <input type="file" ref={this.fileInput} />
          </div>
          <div className="form-group">
            <label htmlFor="text">Read-Only Input</label>
            <input type="text" placeholder="This can only be copied" readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="text">Disabled Input</label>
            <input type="text" disabled />
          </div>
          <div className="form-group">
            <label htmlFor="text">Textarea</label>
            <textarea
              name="textarea"
              onChange={this.handleChange}
              value={this.state.textarea}
              rows="3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Textarea Disabled</label>
            <textarea rows="3" disabled />
          </div>
        </form>
      </div>
    );
  }
}

export default MultipleInput;
