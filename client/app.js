import React from 'react'

export default class App extends React.Component {

  render() {
    return (
      <div id="chat">
        <ul id="messages"></ul>
        <form action="">
          <input id="m" autoComplete="off" /><button>Send</button>
        </form>
      </div>
    )
  }
}
