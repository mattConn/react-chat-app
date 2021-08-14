import React from 'react'
import Message from './Message'
import {makeDate, makeTime} from '../helpers' 
import {base} from '../base'

class App extends React.Component {
  state = {
    messages: {}, // timestamp : message
    messageIDBySender: {}, // senderID : timestamp[]
    users: {} // userID : userName
  }

  inputRef = React.createRef()

  componentDidMount(){
    this.ref = base.syncState('chatroom',{
      context: this,
      state: 'messages' 
    })
    
    const messages = this.state.messages
    const users = {...this.state.users}
    const messageIDBySender = {...this.state.messageIDBySender}

    // update state from firebase
    Object.keys(this.state.messages).forEach((timestamp) => {
      const message = messages[timestamp]

      users[message.senderID] = message.senderName 
      messageIDBySender[message.senderID] = timestamp
    })

    this.setState({
      users: users,
      messageIDBySender: messageIDBySender
    })


    let userID = localStorage.getItem('userID')

    if (!userID) {
      userID = Date.now().toString()

      // Add new user to localstorage 
      localStorage.setItem('userID', userID)
    }

      // Add user to state
      users[userID] = 'Anonymous'+userID
      this.setState({users: users})
  }

  sendMessage = (senderID, senderName, timestamp, content) => {
    const newMessage = {
      senderID: senderID,
      senderName: senderName,
      content: content,
    }

    // store message
    const messages = {...this.state.messages}
    messages[timestamp] = newMessage 

    // store message by sender
    const messageIDBySender = {...this.state.messageIDBySender}
    messageIDBySender[senderID] = messageIDBySender[senderID] ? [...messageIDBySender[senderID], timestamp] : [timestamp]


    this.setState({
      messageIDBySender: messageIDBySender,
      messages: messages
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.sendMessage(localStorage.getItem('userID'),
      this.state.users[localStorage.getItem('userID')],
      Date.now(), 
      this.inputRef.current.value)

    e.target.reset()
  }

  render() {
    return (
      <div className="App">
        <div className="messages">
          {Object.keys(this.state.messages).map((key) => {
            const timestamp = parseInt(key)
            const message = this.state.messages[timestamp]

            return <Message
              senderName={message.senderName}
              date={makeDate(timestamp)}
              time={makeTime(timestamp)}
              content={message.content}
              key={timestamp}
            />
          })}
        </div>

        <form className="messageInput" onSubmit={this.handleSubmit}>
          <input type="text" ref={this.inputRef} required />
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default App;
