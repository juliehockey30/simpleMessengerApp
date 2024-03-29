import styled from 'styled-components';

const MessagesWrapper = styled.div`
  margin-top: 12px;
  margin-right: 100px;
  margin-bottom: 12px;
  margin-left: ${props => props.currentSender ? 'auto' : 0}
  text-align: ${props => props.currentSender ? 'right' : 'left'}
`;

const Sender = styled.div`
  font-size: 14px;
  color: grey;
`;

const Message = styled.div`
  background-color: ${props => props.color};
  border-radius: 3px;
  color: white;
  font-size: 20px;
  margin-left: ${props => props.currentSender ? 'auto' : 0}
  padding: 4px;
  width: fit-content;
`;

export {
  MessagesWrapper,
  Sender,
  Message
}
