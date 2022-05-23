import styled from "styled-components";

export const StyledMain = styled.div`
  padding: 120px 0 90px;

  h1 {
    text-align: center;
    margin-bottom: 25px;
  }

  p {
    font-size: 1.21rem;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 47px;
  }
`;

export const Section = styled.section`
  position: relative;
	padding: ${({ padding }) => padding || 0};
	background-color: ${({ bgColor }) => bgColor || "white"};
`;

export const Divider = styled.div`
	position: relative;

  & > img {
    width: 100%;
  }
`;