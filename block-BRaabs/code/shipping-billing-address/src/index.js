import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import "./styles.css";
import Header from "./Header";
import Controlled from "./Controlled";
// import Uncontrolled from "./Uncontrolled";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Controlled />
        {/* <Uncontrolled /> */}
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
