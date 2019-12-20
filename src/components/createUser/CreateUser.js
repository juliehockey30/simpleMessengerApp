import React, { Component } from 'react';
import {
  CreateUserWrapper,
  Header,
  UserNameInput,
  CreateUserButton,
  ColorDotsWrapper,
  ColorDot
} from './CreateUser.styled.js';

class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      selectedColor: '',
      selectedColorName: null
    }

    this.createUser = this.createUser.bind(this);
    this.selectColor = this.selectColor.bind(this);
  }

  createUser() {
    window.sessionStorage.setItem('user', this.state.userName);
    window.sessionStorage.setItem('color', this.state.selectedColor);
    this.props.goToMessages();
  }

  selectColor(event) {
    this.setState({
      selectedColor: event.target.getAttribute('color'),
      selectedColorName: event.target.getAttribute('id')
    });
  }

  render() {
    return (
      <CreateUserWrapper>
        <Header>What should we call you?</Header>
        <UserNameInput
          autoFocus={true}
          placeholder="Enter your name"
          onChange={(event) => this.setState({ userName: event.target.value})}
          value={this.state.userName}
          onKeyPress={this.submit}
          type="text"
         />
         <Header>Now, choose a color.</Header>
         <ColorDotsWrapper>
           <ColorDot id="Blue" color="#68d3ed" onClick={this.selectColor}/>
           <ColorDot id="Pink" color="#ed8ebe" onClick={this.selectColor}/>
           <ColorDot id="Green" color="#61ab6c" onClick={this.selectColor}/>
           <ColorDot id="Purple" color="#977ebf" onClick={this.selectColor}/>
         </ColorDotsWrapper>
         {this.state.selectedColorName ?
            <h3>You have selected {this.state.selectedColorName}</h3> : null
         }
         <CreateUserButton
          onClick={this.createUser}
          disabled={this.state.userName === '' || this.state.selectedColor === ''}
        >
          LET'S CHAT!
        </CreateUserButton>
      </CreateUserWrapper>
    );
  }
}

export default CreateUser;
