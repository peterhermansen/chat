import React from 'react'
import io from 'socket.io-client'
const socket = io()

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      inputValue: '',
      messageArray: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    socket.on('chat message', (message) => {
      let messageArray = this.state.messageArray.slice()
      messageArray.push(message)
      this.setState({messageArray: messageArray})
    })
  }

  handleSubmit(event) {
    if (this.state.inputValue) {
      event.preventDefault()
      socket.emit('chat message', this.state.inputValue)
      this.setState({inputValue: ''})
    }
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value})
  }

  renderList(message) {
    return (
      <li>{message}</li>
    )
  }

  render() {
    return (
      <div id="chat-app">
        <ul id="messages">
          {this.state.messageArray.map(this.renderList)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input id="message-input" autoComplete="off"
            value={this.state.inputValue}
            onChange={(event) => this.handleChange(event)}
          />
          <button id="message-send">Send</button>
        </form>
      </div>
    )
  }
}
