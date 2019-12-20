import React, { Component } from 'react';
import firebase from 'firebase';
import { MessagesWrapper, Sender, Message } from './Messages.styled.js';

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      messages: [],
    }
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyBK9N_gyWYyfoR4sAzHdG3fT6gYKBShzZg",
      authDomain: "simple-messenger-app-jn31.firebaseapp.com",
      databaseURL: "https://simple-messenger-app-jn31.firebaseio.com",
      projectId: "simple-messenger-app-jn31",
      storageBucket: "simple-messenger-app-jn31.appspot.com",
      messagingSenderId: "431275063574",
      appId: "1:431275063574:web:122d40eb61b9180033b837"
    };
    firebase.initializeApp(firebaseConfig);

    this.getMessagesFromFirebase();
  }


  getMessagesFromFirebase() {
    let messagesDB = firebase.database().ref("messages/");
    messagesDB.on("value", (snapshot) => {
      let snapshotValues = snapshot.val();
      if(snapshotValues) {
        let snapshotValuesArray = Object.entries(snapshotValues);
        let newMessages = []

        snapshotValuesArray.forEach(child => {
          newMessages.push({ id: child.key, text: child[1].text, sender: child[1].sender, senderColor: child[1].senderColor})
        })
        this.setState({ messages: newMessages });
      }
    })
  }

  renderMessage(message) {
    let currentSender = false;
    if(message.sender === window.sessionStorage.getItem('user')) {
      currentSender = true;
    }
    
    return(
      <MessagesWrapper currentSender={currentSender}>
        <Sender>{message.sender}</Sender>
        <Message color={message.senderColor}>{message.text}</Message>
      </MessagesWrapper>
    )
  }

  render() {
    if(this.state.messages) {
      return this.state.messages.map(message => this.renderMessage(message));
    }
  }
}

export default Messages;
