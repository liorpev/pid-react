import styled from "styled-components";

export const GridContainer = styled.div`
  height: 100px;
  width: 1200px;
  background: #1abc9c;
  display: grid;
  grid-gap: 0px 0px;
  grid-template-columns: 1fr 5fr;
`;
export const RowContainer = styled.div`
  text-align: center;
  grid-column-start: 1;
  grid-column-end: span 1;
  border: 3px black solid;
`;

export const PIDContainer = styled.div`
  grid-column-start: 2;
  border: 3px black solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 160px;
  height: 60%;
  border: none;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 25px 25px 25px 25px;
  border: 5px black solid;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
