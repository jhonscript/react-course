import { Component } from "react";

export class Saludar extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <input
          id="hola"
          onChange={(event) => {
            console.log(event);
          }}
        />
      </div>
    );
  }
}
