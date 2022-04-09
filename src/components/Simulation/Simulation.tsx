import React from "react";
import { SimulationData } from "./Simulation.types";
import { GridContainer, RowContainer } from "../PID/PID.styled";
import { H1, H2 } from "../Utils/utils.styled";
import { TimeContainer, Input } from "./Simulation.styled";

export const Simulation = ({
	data: { minutes, seconds, changeTime },
}: SimulationData) => {
	const updateTime = (e:any, index:number) => {
		changeTime(e.target.value, index);
	};
	return (
		<GridContainer>
			<RowContainer>
				<H2>Simulation Data</H2>
			</RowContainer>
			<TimeContainer>
				<H1>Minutes</H1>
				<Input
					placeholder={`minutes`}
					onChange={(e) => updateTime(e, 1)}
					type="number"
				></Input>
				<H1>Second</H1>
				<Input
					placeholder={`seconds`}
					onChange={(e) => updateTime(e, 2)}
					type="number"
				></Input>
			</TimeContainer>
		</GridContainer>
	);
};
