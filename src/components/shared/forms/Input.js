import styled from 'styled-components';

const Input = styled.input`
  &[type='text'] {
    height: 20px;
    outline: none;
    box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.08);
  }

  &[type='submit'], &[type='button'] {
    cursor: pointer;
    border: 2px solid #fff;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    font-size: 15px;
    transition: all 0.1s;
  }

  &[type='submit'] {
    color: hsla(0, 0%, 100%, 0.86);
    background: #3994df;
    padding-right: 10px;
  }

  &[type='submit']:hover {
    background: #0077d8;
  }

  &[type='button'] {
    background: rgb(253, 239, 239);
    margin-left: 10px;
  }

  &[type='button']:hover {
    background: rgb(219, 135, 135);
  }
`;

export default Input;