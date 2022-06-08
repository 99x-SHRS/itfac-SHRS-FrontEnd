import React, { Component } from "react";
import { Modal } from 'react-bootstrap'
import ListGroup from "./ListGroup";
import MessagePagination from './MessagePagination';
import { MessagePaginate } from "./MessagePaginate";
import axios from "axios";
// import { getMessages } from "../services/fakeMessage";
import { getMessagesByRecieverId } from "../../Services/Api/Utilities";
// import { getMessageType } from "../services/fakeMessageType";
import trash from "./utils/trash.svg";
import eye from "./utils/eye.svg";
import { Link } from "react-router-dom";



class Messages extends Component {
    state = {
        messages: getMessagesByRecieverId,
        currentMessage: null,
        messageType: [],
        currentPage: 1,
        selectedType: {},  //check backend
        pageSize: 2,
        data: [],
        show: false

    };

    componentDidMount() {
        this.setState({ messages: getMessagesByRecieverId(), messageType: getMessagesByRecieverId() });   //check backend
        const data = {
            id: localStorage.getItem('userId')
        }
        axios.post('http://localhost:8000/api/message/getMessagesByRecieverId', data)
            .then((res) => {
                this.setState({ data: res.data })
                console.log(this.state.data);
                localStorage.setItem('userId', 4);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
    }
    // componentDidUpdate(){
    //   fetchMessages();
    // }
    // fetchMessages=()=>{

    //     axios.get("http://localhost:8000/api/message/getAllMessage")
    //     .then((res)=>{
    //       console.log(res);
    //     })
    //   .catch((err)=>{
    //     console.log(err);
    //   })
    // }


    handleDelete = (message) => {
        const messages = this.state.messages.filter((m) => m._id !== message._id);
        this.setState({ messages });
    };

    //     handleView = () => {
    //         const messageText = this.state.messages.find((m) => m.text);
    //         console.log(messageText);
    //  }



    handlePageChange = page => {
        this.setState({ currentPage: page });
    }
    handleMessageTypeSelect = type => {
        this.setState({ selectedType: type });
    }




    render() {
        const { length: count } = this.state.messages;
        const { pageSize, currentPage, selectedMessageType, messages: allMessages } = this.state;

        if (count === 0) return <p>There are no messages to show !</p>;

        const filteredMessages = selectedMessageType ? allMessages.filter(m => m.messages._id === selectedMessageType._id) : allMessages;
        const messages = MessagePaginate(filteredMessages, currentPage, pageSize);



        // handleSendMessage = (e) => {
        //   console.log(to.value)
        //   console.log(to.message)

        //   const data={
        //     // id:localStorage.getItem('userId'),
        //     to:to.value,
        //     message:message.value

        //   }
        //   axios.post('http://localhost:8000/api/message/sendMessage',data)
        //   .then((res)=>{
        //     this.setState({data:res.data})
        //     console.log(this.state.data);
        //      localStorage.setItem('userId', 4);
        //   })
        //   .catch((err)=>{
        //     console.log(err);
        //   })

        // }


        // const [to, setToValue] = useState(""); 
        // const [message, setMessageValue] = useState(""); 
        // const handleToChange = (e) => { 
        //   setToValue(e.target.value) 
        // }
        // const handleMessageChange = (e) => { 
        //   setMessageValue(e.target.value) 
        // }



        return (
            <div className="row" id="filterBox">
                <div className="col-0">
                    <ListGroup
                        items={this.state.messageType}
                        selectedItem={this.state.selectedType}
                        onItemSelect={this.handleMessageTypeSelect} />
                </div>


                <div className="col" id="messgaegBox"
                >
                    <Link
                        to="/writeMessages" className="btn btn-primary float-right" style={{ marginTop: 20, marginBottom: 20 }}
                    >New Message</Link>
                    {/* <p>Showing {filteredMessages.length} messages</p> */}


                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Direction</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Message</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.messages.map((message) => (
                                <tr key={message._id}>
                                    <td>{message.date.slice(0, 13)}</td>
                                    {/* slice method used to cut off unnecessary parts of the date */}
                                    <td>{message.direction}</td>
                                    <td>{message.from}</td>
                                    <td>{message.to}</td>
                                    <td>{message.text.slice(0, 20) + "..."}</td>
                                    {/* slice method used to cut off unnecessary parts of the message text */}
                                    <td>
                                        <div className="btn-group mr-2" >
                                            <div
                                                onClick={() => {
                                                    this.handleShow()
                                                    console.log(message.text);
                                                    this.setState({ currentMessage: message.text })
                                                }}
                                                className="btn btn-outline-success btn-sm" >
                                                <img src={eye} className="message-eye" alt="eye" />
                                                View
                                            </div>
                                        </div>
                                        <div className="btn-group mr-2">
                                            <button
                                                onClick={() => this.handleDelete(message)}
                                                className="btn btn-outline-danger btn-sm">
                                                <img src={trash} className="message-trash" alt="trash" />
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <MessagePagination
                        itemsCount={filteredMessages.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} />
                </div>
                <Modal
                    show={this.state.show}
                    onHide={() => {
                        this.handleClose()
                    }}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Pickup your ssss</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        {this.state.currentMessage}
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
            </div >
        );
    }
}

export default Messages;

