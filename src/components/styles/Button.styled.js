import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: white;
	font-size: 1rem;
	font-family: inherit;
	font-weight: 400;
	padding: 15px;
	border: 2px solid hsl(322, 100%, 66%);
	color: hsl(322, 100%, 66%);
`;

export const StyledLink = styled.a`
	background-color: ${({ bgColor }) => bgColor};
	font-size: 1rem;
	font-family: inherit;
	font-weight: 400;
	padding: 8px 30px;
	border: 1px solid ${({ border }) => border};
	color: ${({ text }) => text};
	text-decoration: none;
	transition: all ease 0.3s;
	box-shadow: 0 0 6px ${({ shadow }) => shadow || "rgba(0,0,0,0.2)"};
  margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};

	&:hover {
		background-color: ${({ hoverBgColor }) => hoverBgColor};
		color: ${({ hoverText }) => hoverText};
		border-color: ${({ hoverBorder }) => hoverBorder};
	}

	&.rounded {
		border-radius: 50px;
	}

	&.large {
		font-weight: 600;
		font-size: 1.28rem;
		padding: 25px 100px;
		box-shadow: 0 6px 6px ${({ shadow }) => shadow || "rgba(0,0,0,0.2)"};
	}
`;