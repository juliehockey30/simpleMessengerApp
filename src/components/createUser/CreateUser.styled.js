import styled from 'styled-components';

const CreateUserWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  text-align: center;
`;

const Header = styled.div`
  font-size: 32px;
  margin: 5px;
`;

const UserNameInput = styled.input`
  font-size: 14px;
  height: 40px;
  padding: 0 15px;
  margin-bottom: 24px;
  width: 300px;
`;

const CreateUserButton = styled.button`
  background-color: ${props => props.disabled? '#adadad' : '#28bcf7'};
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  margin: 20px;
  width: 200px;
`;

const ColorDotsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColorDot = styled.span`
  background-color: ${props => props.color};
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  height: 50px;
  margin: 10px;
  width: 50px;
`;

export {
  CreateUserWrapper,
  Header,
  UserNameInput,
  CreateUserButton,
  ColorDotsWrapper,
  ColorDot,
}
