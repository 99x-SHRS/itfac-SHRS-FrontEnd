import React, { Component } from 'react';
import Navbars from '../../Components/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer'
import * as ReactBootstrap from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroupMessages from './ListGroup';
import MessagePagination from './MessagePagination';

import './MessagesStyles/messagesTable.css';
import trash from "./utils/trash.svg";
import eye from "./utils/eye.svg";


import { getMessagesByRecieverId } from '../../Services/Api/Utilities/Index'
import { getMessagesBySenderId } from '../../Services/Api/Utilities/Index'


class Message extends Component {
    state = {
        messages: []

    }
    async componentDidMount() {
        const dataModel = {
            // id: localStorage.getItem('userId')
            id: 1
        }
        const data = await getMessagesByRecieverId(dataModel)
        this.setState({ messages: data.data })
        console.log(data);
    }
    async componentDidMount() {
        const dataModel = {
            // id: localStorage.getItem('userId')
            id: 1
        }
        const data = await getMessagesBySenderId(dataModel)
        this.setState({ messages: data.data })
        console.log(data);
    }
    handleShowModal = () => {
        this.setState({ show: true });
    }
    handleCloseModal = () => {
        this.setState({ show: false });
    }
    handleViewReceivedMessages = () => {
    }
    handleViewReceivedMessages = () => {
    }


    render() {
        return (
            <div>
                <div>
                    <Navbars />
                </div>
                <div>
                    <ListGroupMessages />
                </div>
                {/* if({this.state.messages.length === 0}) return <p>There are no messages to show !</p> */}
                <div className='messagesTable'>
                    <ReactBootstrap.Table striped bordered hover>
                        <thead className='messageTableHead'>
                            <tr>
                                <th>Date</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='messageTableBody'>
                            {this.state.messages.map((message) =>
                                <tr key={message.messageId}>
                                    <td>{message.createdAt.split('T')[0]}</td>
                                    {/* <td>incomming</td> */}
                                    <td>{message.from}</td>
                                    <td>{message.to}</td>
                                    <td>{message.notification.slice(0, 20) + "..."}</td>
                                    <td>
                                        <span className="viewButton" >
                                            <div
                                                onClick={() => {
                                                    this.handleShowModal()
                                                    console.log(message.text);
                                                    this.setState({ currentMessage: message.notification })
                                                }}
                                                className="viewButton btn btn-outline-success" >
                                                <img src={eye} className="message-eye" alt="eye" />
                                                View
                                            </div>
                                        </span>
                                        <span className="deleteButton">
                                            <button
                                                onClick={() => this.handleDelete(message)}
                                                className="btn btn-outline-danger">
                                                <img src={trash} className="message-trash" alt="trash" />
                                                Delete
                                            </button>
                                        </span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </ReactBootstrap.Table>
                    <span>
                        <MessagePagination />
                    </span>
                </div>
                <Modal className='messageViewModal'
                    show={this.state.show}
                    onHide={() => {
                        this.handleCloseModal()
                    }}
                >
                    <Modal.Header >
                        <Modal.Title>New Message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='messageViewModalBody'>
                        {this.state.currentMessage}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="modalCloseButton" variant="secondary" onClick={this.handleCloseModal}>
                            Close
                        </Button>
                        <Button className="modalSaveButton" variant="primary" onClick={this.handleCloseModal}>
                            Reply
                        </Button>
                    </Modal.Footer>
                </Modal>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Message;