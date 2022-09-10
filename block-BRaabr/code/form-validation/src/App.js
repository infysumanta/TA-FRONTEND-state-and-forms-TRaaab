import React, { Component } from "react";
import FormValidation from "./components/FormValidation";
import MultipleInput from "./components/MultipleInput";

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <MultipleInput /> */}
        <FormValidation />
      </div>
    );
  }
}

export default App;
