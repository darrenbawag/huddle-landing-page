import styled from "styled-components";

export const Counter = styled.div`
	flex: 0 !important;
	margin-top: ${({ marginTop }) => marginTop + "px" || "0"};
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};
	margin-left: ${({ marginLeft }) => marginLeft + "px" || "0"};
	margin-right: ${({ marginRight }) => marginRight + "px" || "0"};
	padding-top: ${({ paddingTop }) => paddingTop + "px" || "0"};
	padding-bottom: ${({ paddingBottom }) => paddingBottom + "px" || "0"};
	padding-left: ${({ paddingLeft }) => paddingLeft + "px" || "0"};
	padding-right: ${({ paddingRight }) => paddingRight + "px" || "0"};

	& > div {
		font-weight: 700;
		font-size: 6rem;
		text-align: center;
		margin-bottom: 5px;
	}

	& > p {
		font-size: 1.5rem;
		text-align: center;
	}
`;