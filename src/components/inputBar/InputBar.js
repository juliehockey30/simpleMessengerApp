import React, { Component } from 'react';
import firebase from 'firebase';
import { InputWrapper, StyledInput, SendButton } from './InputBar.styled.js'

class InputBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }

    this.sendMessageOnClick = this.sendMessageOnClick.bind(this);
    this.sendMessageOnEnter = this.sendMessageOnEnter.bind(this);
  }

  sendMessageOnClick(event) {
    event.preventDefault();
    if(this.state.text.length > 0) {
      this.sendMessageToFirebase(this.state.text);
      this.setState({ text: "" })
    }
  }

  sendMessageOnEnter(event) {
    if(event.which === 13) {
      this.sendMessageOnClick(event);
    }
  }

  sendMessageToFirebase(message) {
    const sender = window.sessionStorage.getItem('user');
    const senderColor = window.sessionStorage.getItem('color')
    firebase.database().ref("messages/").push({ text: message, sender, senderColor });
  }

  render() {
    return (
      <InputWrapper>
        <StyledInput
          autoFocus={true}
          placeholder="Say Something..."
          onChange={(event) => this.setState({ text: event.target.value})}
          value={this.state.text}
          onKeyDown={this.sendMessageOnEnter}
          type="text"
         />
         <SendButton onClick={this.sendMessageOnClick}>SEND</SendButton>
      </InputWrapper>
    );
  }
}

export default InputBar;
