import { StyledHeader, Logo } from "./styles/Header.styled";
import { LargeContainer } from "./styles/Container.styled";
import { Flexbox } from "./styles/Flexbox.styled";
import { StyledLink } from "./styles/Button.styled";

const Header = ({ text, hoverText, bgColor, hoverBgColor, border, hoverBorder, shadow }) => {
  return (
		<StyledHeader>
			<LargeContainer>
				<Flexbox alignItems="center" justifyContent="space-between">
					<Logo src="./images/logo.svg" alt="Huddle Logo" />
					<StyledLink
						href="#"
						className="rounded"
						text={text}
						hoverText={hoverText}
						bgColor={bgColor}
						hoverBgColor={hoverBgColor}
						border={border}
						hoverBorder={hoverBorder}
            shadow={shadow}
					>
						Try It Free
					</StyledLink>
				</Flexbox>
			</LargeContainer>
		</StyledHeader>
	);
}

export default Header;