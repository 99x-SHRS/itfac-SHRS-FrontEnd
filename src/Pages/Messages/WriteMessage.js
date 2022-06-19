import React, { Component } from 'react';
import Navbars from '../../Components/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer'
import Messages from './Message';

const WriteMessage = () => {
    return (
        <div>
            <div>
                <Navbars />
            </div>

            <div className='writeMessageBox'>
                <div className='writeMessageBoxHeader'>
                    <>Write Message</>
                </div>

                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">To</label>
                        <input type="string" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter receiver"></input>
                        {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Message</label>
                        <input type="string" class="form-control" id="exampleInputPassword1" placeholder="Enter message"></input>
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


export default WriteMessage;