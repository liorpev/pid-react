import styled from "styled-components";

export const WidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: black 5px solid;
  background-color: #f5f5dc;
  height: 100vh;
`;
export const GridContainer = styled.div`
  height: 400px;
  width: 1200px;
  background: #1abc9c;
  display: grid;
  grid-gap: 0px 0px;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: repeat(4, 100px);
`;


export const Button = styled.button`
  margin-top: 40px;
  margin-bottom: 20px;
  border-radius: 25px 25px 25px 25px;
  border: 5px black solid;
  font-size: 35px;
  font-weight: bold;
  width: 300px;
  height: 60px;
  color: white;
  background-color: #1abc9c;
  cursor: pointer;
`;
