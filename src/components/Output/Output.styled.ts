import styled from "styled-components";

export const WidthContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: black 5px solid;
	background-color: #f5f5dc;
	height: 100vh;
`;

export const GridContainerPID = styled.div`
	height: 160px;
	width: 1200px;
	background: #1abc9c;
	display: grid;
	grid-template-rows: repeat(2, 80px);
	margin-bottom: 40px;
`;

export const PIDBefore = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	grid-row-start: 1;
	border: 3px black solid;
`;

export const PIDAfter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	grid-row-start: 2;
	border: 3px black solid;
`;

export const InputReadOnly = styled.input`
	width: 20%;
	height: 60%;
	border: none;
	margin-left: 20px;
	margin-right: 20px;
	border-radius: 25px 25px 25px 25px;
	border: 5px black solid;
	font-size: 40px;
	font-weight: bold;
	cursor: pointer;
	background-color: #c0c0c0;
	text-align: center;
	margin-left: 20px;
`;

export const GraphContainer = styled.div`
	width: 600px;
	background-color: white;
	border: 5px solid black;
	display: flex;
	flex-direction: column;
`;

export const GraphsContainer = styled.div`
	display: flex;
`;

export const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 10px;
`;
