import React from "react";
import { PID } from "./PID.types";
import { RowContainer, PIDContainer, GridContainer, Input } from "./PID.styled";
import { H1, H2 } from "../Utils/utils.styled";

export const ManualPID = ({ data: { pVal, iVal, dVal, changePID } }: PID) => {
	const updatePIDValues = (e:any, index:number) => {
		changePID(e.target.value, index);
	};
	return (
		<GridContainer>
			<RowContainer>
				<H2>PID Manual Entry</H2>
			</RowContainer>
			<PIDContainer>
				<H1>P</H1>
				<Input
					placeholder={`${pVal}`}
					onChange={(e) => updatePIDValues(e, 1)}
					type="number"
				></Input>
				<H1>I</H1>
				<Input
					placeholder={`${iVal}`}
					onChange={(e) => updatePIDValues(e, 2)}
					type="number"
				></Input>
				<H1>D</H1>
				<Input
					placeholder={`${dVal}`}
					onChange={(e) => updatePIDValues(e, 3)}
					type="number"
				></Input>
			</PIDContainer>
		</GridContainer>
	);
};
