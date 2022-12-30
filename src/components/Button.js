import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => {
    if (props.primary) {
      return "blue";
    } else if (props.secondary) {
      return "green";
    } else {
      return "white";
    }
  }};
  border: none;
  color: ${(props) => {
    if (props.primary) {
      return "white";
    } else if (props.secondary) {
      return "white";
    } else {
      return "black";
    }
  }};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export default Button;
