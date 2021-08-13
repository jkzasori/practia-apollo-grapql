import styled from "styled-components";
import { Colors } from "../../libs/generalStyles/color";
export const AddEditClient = styled.div`
  height: 100%;
  background: ${Colors.principal};
  display: flex;
  flex-wrap: wrap;
  padding: 30px 0;
  justify-content: center;
  h2 {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }
  input,
  select, button {
    width: 70%;
    height: 35px;
  }
  button {
    border: none;
    border-radius: 15px;
    box-shadow: 1px 2px 5px 1px #180446;
    cursor: pointer;
  }
`;
