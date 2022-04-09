import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataArray } from "../../MockData/Data";
import { GridElement } from "../GridElement/GridElement";
import { ManualPID } from "../PID/ManualPID";
import { Simulation } from "../Simulation/Simulation";
import { Error } from "../Utils/Error";
import Loader from "../Utils/Loader";
import { H1Header, HeaderContainer } from "../Utils/utils.styled";
import { Button, GridContainer, WidthContainer } from "./Home.styled";
import { PIDNumbers, QueryData, SimulationData } from "./Home.types";

export const Home = () => {
	const statusOk = 200;
	const navigate = useNavigate();
	const [loader, setLoader] = useState<boolean>(false);
	const [errorFlag, setErrorFlag] = useState<boolean>(false);
	const [queryData, setQueryData] = useState<QueryData[]>(
		Array(4).fill({
			path: "",
			minVal: 0,
			maxVal: 0,
		})
	);
	const [pidValues, setPidValues] = useState<PIDNumbers>({
		pVal: 0,
		iVal: 0,
		dVal: 0,
	});
	const [timeValue, setTimeValue] = useState<SimulationData>({
		minutes: 0,
		seconds: 0,
	});

	interface ResponseData {
		current_d: number;
		current_i: number;
		current_p: number;
		graph_after: [number, number];
		graph_before: [number, number];
		recommended_i: number;
		recommended_p: number;
		recommended_d: number;
		set_point: number;
	}
	const sendQuery = () => {
		// setErrorFlag(true);
		setLoader(true);
		setTimeout(() => {
			setLoader(false);
			navigate("/output", {
				state: {
					pidBefore: { pVal: 0, iVal: 0, dVal: 0 },
					pidAfter: { pVal: 0, iVal: 0, dVal: 0 },
					setPoint: 0,
					graphBefore: [],
					graphAfter: [],
				},
			});
		}, 3000);
		// axios
		// 	.get("http://127.0.0.1:5000", {
		// 		params: {
		// 			queryData: {
		// 				valPath: queryData[0],
		// 				setpointPath: queryData[1],
		// 				pidPath: queryData[2],
		// 				pidValuePath: queryData[3],
		// 			},
		// 			pidValues: { ...pidValues },
		// 			timeValue: { ...timeValue },
		// 		},
		// 	})
		// 	.then(function (response) {
		// 		if (response.status === statusOk) {
		// 			setLoader(false);
		// 			const data: ResponseData = response.data;
		// 			navigate("/output", {
		// 				state: {
		// 					pidBefore: {
		// 						pVal: data.current_p,
		// 						iVal: data.current_i,
		// 						dVal: data.current_d,
		// 					},
		// 					pidAfter: {
		// 						pVal: data.recommended_p,
		// 						iVal: data.recommended_i,
		// 						dVal: data.current_d,
		// 					},
		// 					setPoint: data.set_point,
		// 					graphBefore: data.graph_before,
		// 					graphAfter: data.graph_after,
		// 				},
		// 			});
		// 		}
		// 	});
	};

	const changeQueryData = (value: any, row: number, index: number) => {
		const changedArray = queryData.map((element, iter) => {
			if (iter === row) {
				let modifiedElement: QueryData = {
					path: "",
					minVal: 0,
					maxVal: 0,
				};
				switch (index) {
					case 1:
						modifiedElement = {
							path: value,
							minVal: element.minVal,
							maxVal: element.maxVal,
						};
						break;
					case 2:
						modifiedElement = {
							path: element.path,
							minVal: value,
							maxVal: element.maxVal,
						};
						break;
					case 3:
						modifiedElement = {
							path: element.path,
							minVal: element.minVal,
							maxVal: value,
						};
						break;
				}

				return modifiedElement;
			}
			return element;
		});
		setQueryData(changedArray);
	};

	const changePID = (value: number, index: number) => {
		switch (index) {
			case 1:
				setPidValues({ ...pidValues, pVal: value });
				break;
			case 2:
				setPidValues({ ...pidValues, iVal: value });
				break;
			case 3:
				setPidValues({ ...pidValues, dVal: value });
				break;
		}
	};
	const changeTime = (value: number, index: number) => {
		switch (index) {
			case 1:
				setTimeValue({ ...timeValue, minutes: value });
				break;
			case 2:
				setTimeValue({ ...timeValue, seconds: value });
				break;
		}
	};
	const errorToggle = () => setErrorFlag(false);

	return (
		<WidthContainer>
			{loader && <Loader />}
			{errorFlag && (
				<Error data={{ error: "blabla", errorToggle: errorToggle }} />
			)}
			<HeaderContainer>
				<H1Header>OPC Query</H1Header>
			</HeaderContainer>
			<GridContainer>
				{DataArray.length > 0 &&
					DataArray.map((element, index) => {
						return (
							<GridElement
								key={index}
								data={{
									pathName: element.pathName,
									minScale: element.minScale,
									maxScale: element.maxScale,
									changeQueryData: changeQueryData,
									row: index,
								}}
							/>
						);
					})}
			</GridContainer>
			<ManualPID
				data={{
					pVal: pidValues.pVal,
					iVal: pidValues.iVal,
					dVal: pidValues.dVal,
					changePID: changePID,
				}}
			/>
			<Simulation
				data={{
					minutes: timeValue.minutes,
					seconds: timeValue.seconds,
					changeTime: changeTime,
				}}
			/>
			<Button onClick={sendQuery}>Send Query</Button>
		</WidthContainer>
	);
};
