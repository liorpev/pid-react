import React from "react";
import { H1 } from "../Utils/utils.styled";
import { InputReadOnly } from "./Output.styled";
import { PIDDisplayProps } from "./Output.types";

export const PIDDisplay = ({ pVal, iVal, dVal }: PIDDisplayProps) => {
	return (
		<>
			<H1>P</H1>
			<InputReadOnly value={pVal} disabled></InputReadOnly>
			<H1>I</H1>
			<InputReadOnly value={iVal} disabled></InputReadOnly>
			<H1>D</H1>
			<InputReadOnly value={dVal} disabled></InputReadOnly>
		</>
	);
};
