import React from 'react'
import Message from './message'
import {makeTimestamp} from '../helpers' 

class App extends React.Component {
  state = {
    messages: {}, // messageID : message
    messageIDByTime: [], // index : messageID
    messageIDBySender: {}, // senderID : messageID[]
    users: {} // userID : userName
  }

  inputRef = React.createRef()

  componentDidMount(){
    let userID = localStorage.getItem('userID')

    if (!userID) {
      userID = Date.now().toString()

      // Add new user to localstorage 
      localStorage.setItem('userID', userID)
    }

      // Add user to state
      const users = {...this.state.users}
      users[userID] = 'Anonymous'+userID
      this.setState({users: users})
  }

  sendMessage = (e) => {
    e.preventDefault()
    const userID = localStorage.getItem('userID')
    const messageID = userID + Date.now().toString()

    const newMessage = {
      senderID: userID,
      timestamp: makeTimestamp(Date.now()),
      content: this.inputRef.current.value,
    }

    // store message
    const messages = {...this.state.messages}
    messages[messageID] = newMessage 

    // store message by sender
    const messageIDBySender = {...this.state.messageIDBySender}
    messageIDBySender[userID] = messageIDBySender[userID] ? [...messageIDBySender[userID], messageID] : [messageID]


    this.setState({
      messageIDByTime: [...this.state.messageIDByTime, messageID],
      messageIDBySender: messageIDBySender,
      messages: messages
    })
    e.target.reset()
  }

  render() {
    return (
      <div className="App">
        <div className="messages">
          {this.state.messageIDByTime.map((messageID) => {
            const message = this.state.messages[messageID]

            return <Message
              senderName={this.state.users[message.senderID]}
              timestamp={message.timestamp}
              content={message.content}
              key={messageID}
            />
          })}
        </div>

        <form className="messageInput" onSubmit={this.sendMessage}>
          <input type="text" ref={this.inputRef} required />
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default App;
