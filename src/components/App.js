import React from 'react'
import Message from './message'

class App extends React.Component {
  state = {
    messages: [],
    users: {}
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

    const newMessage = {
      senderName: this.state.users[localStorage.getItem('userID')],
      timestamp: 'now',
      content: this.inputRef.current.value,
      key: Date.now()
    }

    this.setState({
      messages: [...this.state.messages, newMessage]
    })
    e.target.reset()
  }

  render() {
    return (
      <div className="App">
        <div className="messages">
          {this.state.messages.map((msg) => (
            <Message
              senderName={msg.senderName}
              timestamp={msg.timestamp}
              content={msg.content}
              key={msg.key}
            />
          ))}
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
