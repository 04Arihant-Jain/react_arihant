import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Hiration Interns</h1>
      <h2>Lets create some miracle!</h2>
    </div>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);