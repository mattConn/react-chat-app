import React from 'react'
import Message from './message'

class App extends React.Component {
  state = {
    messages: []
  }

  inputRef = React.createRef()

  sendMessage = (e) => {
    e.preventDefault()
    this.setState({
      messages: [...this.state.messages,
      {
        senderID: 'Matt',
        timestamp: 'now',
        content: this.inputRef.current.value
      }]
    })
    e.target.reset()
  }

  render() {
    return (
      <div className="App">
        <div className="messages">
          {this.state.messages.map((msg) => (
            <Message
              senderID={msg.senderID}
              timestamp={msg.timestamp}
              content={msg.content}
            />
          ))}
        </div>

        <form className="messageInput" onSubmit={this.sendMessage}>
          <input type="text" ref = {this.inputRef} required />
          <button type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default App;
