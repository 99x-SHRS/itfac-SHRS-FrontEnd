import React, { Component } from 'react';
import Navbars from '../../Components/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer'

class WriteMessage extends Component {
    state = {
        message: {
            to: '',
            messageText: ''
        }
    }

    handleWriteMessage = e => {
        e.preventDefault();
    }
    handleChange = e => {
        const message = { ...this.state.message };
        message[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ message });
    }

    render() {
        return (
            <div>
                <div>
                    <Navbars />
                </div>

                <div className='writeMessageBox'>
                    <div className='writeMessageBoxHeader'>
                        <>Write Message</>
                    </div>

                    <form onSubmit={this.handleWriteMessage}>
                        <div class="writeMessage-form-group">
                            <label htmlFor="to">To</label>
                            <input value={this.state.message.to}
                                onChange={this.handleChange}
                                name="to"
                                type="string" class="form-control" id="to" aria-describedby="emailHelp" placeholder="Enter receiver"></input>
                            <br />
                        </div>
                        <div class="writeMessage-form-group">
                            <label htmlFor="messageText">Message</label>
                            <input value={this.state.message.messageText}
                                onChange={this.handleChange}
                                name="messageText"
                                type="string" class="form-control" id="messageText" placeholder="Enter message"></input>
                            <br />
                        </div>
                        <button
                            onClick={() => this.handleSendMessage}
                            type="submit" className="btn btn sendMessageButton">Send</button>
                    </form>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default WriteMessage;


// handleSendMessage = () => {
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


