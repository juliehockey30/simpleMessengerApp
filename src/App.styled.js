import styled from 'styled-components'

const Wrapper =  styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 500px;
`;

const ComponentWrapper = styled.div`
  border: 2px solid black;
  padding: 16px;
`;

const Warning = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 12px 0;
  text-align: center;
`;

const SubWarning = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 12px 0;
  text-align: center;
`;

export {
  Wrapper,
  ComponentWrapper,
  Warning,
  SubWarning,
}
