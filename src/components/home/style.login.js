import styled from "styled-components";
import { Colors } from "../../libs/generalStyles/color";
export const LoginFormContainer = styled.div`
  background-color: ${Colors.secundario};
  border: 1px solid gray;
  border-radius: 100px;
  box-shadow: 2px 1px 4px #13023c;
  height: 200px;
  width: 300px;
  padding: 10px;
  box-sizing: border-box;
  form {
    padding: 5px;
    background-color: ${Colors.principal};
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  label {
    display: block;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    color: ${Colors.secundario};
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
  }
  input {
    height: 20px;
  }
`;
