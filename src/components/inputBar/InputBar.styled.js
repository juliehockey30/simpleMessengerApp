import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  margin-top: 10px;
`;

const StyledInput = styled.input`
  font-size: 14px;
  padding: 0 15px;
  width: 100%;
`;

const SendButton = styled.button`
  background-color: #28bcf7;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-left: 16px;
  width: 100px;
`;

export {
  InputWrapper,
  StyledInput,
  SendButton,
}
