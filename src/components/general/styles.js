import styled from "styled-components";
import { Colors } from "../../libs/generalStyles/color";
export const GeneralInformationContainer = styled.div`
  text-align: center;
  color: ${Colors.secundario};
  h1 {
    text-transform: uppercase;
  }
`;
export const TableCustomContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  button {
    cursor: pointer;
    border: none;
    padding: 5px;
    border-radius: 5px;
    font-size: 10px;
    box-shadow: 2px 3px 4px red;
    background-color: #dccde0;
  }
  table {
    width: 100%;
    /* border: 1px solid gray; */
    box-sizing: border-box;
    box-shadow: 2px 3px 4px gray;
    border-radius: 5px;
    th {
      text-transform: uppercase;
      border-bottom: 1px solid gray;
      color: #941fb3;
    }
    th,
    td {
      text-align: center;
    }
    td {
      color: gray;
    }
    tr:hover {
      background-color: #dccde0;
    }
  }
`;
