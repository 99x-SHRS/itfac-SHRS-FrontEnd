import React, { Component } from "react";
import { getMessages } from "../services/fakeMessage";
import trash from "../trash.svg";
import eye from "../eye.svg";

class Messages extends Component {
  state = {
    messages: getMessages(),
  };

  handleDelete = (message) => {
    const messages = this.state.messages.filter((m) => m._id !== message._id);
    this.setState({ messages });
  };

  handleView = (message) => {
    const viewMessage = this.state.messages.text;
    <div
      class="modal fade"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Modal title
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{viewMessage}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>;
  };
  render() {
    const { length: count } = this.state.messages;
    if (count === 0) return <p>There are no messages to show !</p>;
    return (
      <React.Fragment>
        <p>Showing {count} messages in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Direction</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.messages.map((message) => (
              <tr key={message._id}>
                <td>{message.date}</td>
                <td>{message.direction}</td>
                <td>{message.from}</td>
                <td>{message.to}</td>
                <td>{message.status}</td>
                <td>
                  <div className="btn-group mr-2">
                    <button
                      onClick={() => this.handleDelete(message)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      <img src={trash} className="message-trash" alt="trash" />
                      Delete
                    </button>
                  </div>

                  <button
                    onClick={() => this.handleView(message)}
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                  >
                    <img src={eye} className="message-eye" alt="eye" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Messages;

{
  /* <button
  type="button"
  class="btn btn-primary"
  data-toggle="modal"
  data-target="#exampleModalLong"
>
  Launch demo modal
</button>; */
}
