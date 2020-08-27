import React, { Component } from "react";
import axios from "axios";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.data,
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }

  decrement() {
    if (this.state.count === 0) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  resetCount() {
    this.setState({
      count: 0,
    });
  }
  reset() {
    if (this.state.count > 0) {
      return (
        <button
          style={{ backgroundColor: "#0000FF", padding: "10px", color: "#fff" }}
          onClick={() => this.resetCount()}
        >
          Reset
        </button>
      );
    }
  }

  rowDelete() {
    var index = this.state.items;
    this.state.items.splice(index, 1);
    this.setState(this.state.items);
    alert("You deleted the row: ");
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>
          {" "}
          Count =
          <span style={{ color: this.state.count === 0 ? "green" : "" }}>
            {" "}
            {this.state.count}
          </span>
        </h1>

        <button
          style={{ backgroundColor: "#009900", padding: "10px", color: "#fff" }}
          onClick={() => this.increment()}
        >
          Increment
        </button>
        <button
          style={{
            backgroundColor: "#FF0000",
            padding: "10px",
            marginLeft: 15,
            marginRight: 15,
          }}
          disabled={!this.state.count}
          onClick={() => this.decrement()}
        >
          Decrement
        </button>
        {this.reset()}
        <div>
          <table style={{ width: "", border: "19px", borderColor: "red" }}>
            <thead style={{ border: "1px", borderColor: "#eee" }}>
              <tr>
                <th
                  style={{
                    backgroundColor: "#3498db",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  ID
                </th>
                <th
                  style={{
                    backgroundColor: "#3498db",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Name
                </th>
                <th
                  style={{
                    backgroundColor: "#3498db",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    backgroundColor: "#3498db",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  City
                </th>
                <th
                  style={{
                    backgroundColor: "#3498db",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item}>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px",
                      textAlign: "left",
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    {item.id}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px",
                      textAlign: "left",
                      fontSize: "15px",
                    }}
                  >
                    {item.name}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px",
                      textAlign: "left",
                      fontSize: "15px",
                    }}
                  >
                    {item.email}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px",
                      textAlign: "left",
                      fontSize: "15px",
                    }}
                  >
                    {item.address.city}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px",
                      textAlign: "left",
                      fontSize: "15px",
                    }}
                  >
                    {item.company.name}
                  </td>
                  <button
                    style={{ backgroundColor: "#3498db" }}
                    onClick={() => this.rowDelete()}
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Counter;
