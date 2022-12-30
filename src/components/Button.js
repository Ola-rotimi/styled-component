import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.primary && "palevioletred"},
    ${(props) => props.secondary && "green"};
  border: none;
  color: ${(props) => (props.primary && "white")}, ${(props) => (props.secondary && "white")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export default Button;
