import React from "react";
import { MiddleScreenContainer } from "./utils.styled";
import { H1Error, H2Error, ErrorContainer, ErrorButton } from "./utils.styled";

interface ErrorProps {
	data: {
		error: string;
		errorToggle: () => void;
	};
}
export const Error: React.FunctionComponent<ErrorProps> = ({
	data: { error, errorToggle },
}: ErrorProps) => {
	return (
		<MiddleScreenContainer>
			<ErrorContainer>
				<H1Error>Error!</H1Error>
				<H2Error>Something went wrong</H2Error>
				<H2Error>{error}</H2Error>
				<ErrorButton onClick={() => errorToggle()}>OK</ErrorButton>
			</ErrorContainer>
		</MiddleScreenContainer>
	);
};
