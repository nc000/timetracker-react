import styled from 'styled-components';

const Div = styled.div`
  width: 70%;
  position: relative;
  margin: 0 auto;
  padding: 10px;

  :first-child {
    width: 100%;
    padding: 5px 0;
    background: #3994df;
  }

  :last-child {
    padding-top: 20px;
  }
`;

export default Div;