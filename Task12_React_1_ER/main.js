import "./styles.css";
import React from "react";

export default function App() {
  class Hello extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: {} };
      this.handleClick = this.handleClick.bind(this);
      this.handleChangeFirst = this.handleChangeFirst.bind(this);
    }

    handleClick() {
      fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((json) => {
          console.log(json.results[0]);
          this.setState({
            items: json.results[0]
          });
        });
    }

    handleChangeFirst(event) {
      this.setState({ items: { name: { first: event.target.value } } });
    }

    componentDidMount() {
      this.handleClick();
    }

    // setState(updater[, callback])
    // fetch('https://randomuser.me/api/');

    render() {
      return (
        <div className="wrapp">
          <button className="fetch_btn" onClick={this.handleClick}>
            add random content
          </button>
          {/* <div className="message-box">Hello {this.props.name}</div> */}
          <div>{this.state.items.email}</div>
          <div>{this.state.items.phone}</div>
          <div>
            {this.state.items.name?.title}
            {". "}
            {this.state.items.name?.first} {this.state.items.name?.last}
          </div>
          <img className="image" src={this.state.items.picture?.large}></img>
          <input
            className="inputClass"
            value={this.state.items.name?.first}
            onChange={this.handleChangeFirst}
          />
          <input
            className="inputClass"
            value={this.state.items.name?.last}
            onChange={this.handleChangeLast}
          />
        </div>
      );
    }
  }

  // onchange => event => state => target

  return (
    <div className="App">
      <div className="fetchDiv">
        <h1>User Cards</h1>
        <pre className="output"></pre>
      </div>
      <Hello />
    </div>
  );
}
