import React, { Component } from 'react';
import Messages from './components/messages/Messages.js';
import InputBar from './components/inputBar/InputBar.js';
import CreateUser from './components/createUser/CreateUser.js'
import { Wrapper, ComponentWrapper, Warning, SubWarning } from './App.styled.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needToCreateUser: !window.sessionStorage.getItem('user')
    }

    this.goToMessages = this.goToMessages.bind(this);
  }

  goToMessages() {
    this.setState({ needToCreateUser: false });
  }

  render() {

    if(this.state.needToCreateUser) {
      return (
        <Wrapper>
          <CreateUser goToMessages={this.goToMessages}/>
        </Wrapper>
      )
    }
    return (
      <Wrapper>
        <Warning>Note that all messages you send are FINAL.</Warning>
        <SubWarning>There's no unsending them, and everyone who access to the app will be able to see your message(s).</SubWarning>
        <SubWarning>Happy chatting!</SubWarning>
        <ComponentWrapper>
          <Messages />
          <InputBar />
        </ComponentWrapper>
      </Wrapper>
    );
  }
}

export default App;
