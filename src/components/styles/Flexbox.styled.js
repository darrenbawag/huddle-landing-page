import styled from "styled-components";

export const Flexbox = styled.div`
	display: flex;
	align-items: ${({ alignItems }) => alignItems || "flex-start"};
	justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};
  flex-direction: ${({layout}) => layout || "row"};

  & > div {
    flex: 1;
  }
`;

export const Column = styled.div`
	margin-top: ${({ marginTop }) => marginTop + "px" || "0"};
	margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};
	margin-left: ${({ marginLeft }) => marginLeft + "px" || "0"};
	margin-right: ${({ marginRight }) => marginRight + "px" || "0"};
	padding-top: ${({ paddingTop }) => paddingTop + "px" || "0"};
	padding-bottom: ${({ paddingBottom }) => paddingBottom + "px" || "0"};
	padding-left: ${({ paddingLeft }) => paddingLeft + "px" || "0"};
	padding-right: ${({ paddingRight }) => paddingRight + "px" || "0"};
`;