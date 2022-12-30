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

    &:hover, &:focus {
        background-color: ${(props) => {
            if (props.primary) {
                return "darkblue";
            } else if (props.secondary) {
                return "darkgreen";
            } else {
                return "lightgray";
            }
        }};
        color: ${(props) => {
            if (props.primary) {
                return "white";
            } else if (props.secondary) {
                return "white";
            } else {
                return "black";
            }
        }};
    }
`;

const FancyButton = styled(Button)`
    background-color: ${(props) => {
        if (props.primary) {
            return "purple";
        } else if (props.secondary) {
            return "orange";
        } else {
            return "white";
        }
    }};
    color: ${(props) => {
        if (props.primary) {
            return "white";
        } else if (props.secondary) {
            return "white";
        } else {
            return "black";
        }
    }};
    &:hover, &:focus {
        background-color: ${(props) => {
            if (props.primary) {
                return "darkpurple";
            } else if (props.secondary) {
                return "darkorange";
            } else {
                return "lightgray";
            }
        }};
        color: ${(props) => {
            if (props.primary) {
                return "white";
            } else if (props.secondary) {
                return "white";
            } else {
                return "black";
            }
        }};
    }
`;

export default Button;
export { FancyButton };