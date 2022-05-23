import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyle } from "./components/styles/Global.styled";
import { Guide } from "./components/styles/Guide.styled";
import { LargeContainer, Container } from "./components/styles/Container.styled";
import { Flexbox, Column } from "./components/styles/Flexbox.styled";
import { StyledMain, Section, Divider } from "./components/styles/Content.styled";
import { StyledLink } from "./components/styles/Button.styled";
import { Counter } from "./components/styles/Counter.styled";
import { ReactComponent as ReactLogo } from "./bg-section-top-desktop-1.svg";
import data from "./data";

const theme = {
	colors: {
		primary: {
			pink: "hsl(322, 100%, 66%)",
			"light-pink": "hsl(321, 100%, 78%)",
			"light-red": "hsl(0, 100%, 63%)",
		},
		neutral: {
			"very-dark-cyan": "hsl(192, 100%, 9%)",
			"very-pale-blue": "hsl(207, 100%, 98%)",
			white: "hsl(0, 0%, 100%)",
		},
	},
};

const App = () => {
  return (
		<ThemeProvider theme={theme}>
			<GlobalStyle color={theme.colors.neutral["very-dark-cyan"]} />
			<Guide>
				<img src="./design/desktop-design.jpg" alt="Desktop Design" />
			</Guide>
			<Header
				text={theme.colors.primary.pink}
				hoverText={theme.colors.primary["light-pink"]}
				bgColor={theme.colors.neutral.white}
				hoverBgColor={theme.colors.neutral.white}
				border={theme.colors.primary.pink}
				hoverBorder={theme.colors.primary["light-pink"]}
				shadow={theme.colors.primary["light-pink"]}
			/>
			<main>
				<StyledMain>
					<Container>
						<h1>Build The Community Your Fans Will Love</h1>
						<p>
							Huddle re-imagines the way we build communities. You have a voice,
							but so does your audience. Create connections with your users as
							you engage in genuine discussion.
						</p>
						<Flexbox justifyContent="center">
							<StyledLink
								href="#"
								className="rounded large"
								text={theme.colors.neutral.white}
								hoverText={theme.colors.neutral.white}
								bgColor={theme.colors.primary.pink}
								hoverBgColor={theme.colors.primary["light-pink"]}
								border={theme.colors.primary.pink}
								hoverBorder={theme.colors.primary["light-pink"]}
								marginBottom="110"
							>
								Get Started For Free
							</StyledLink>
						</Flexbox>
						<Flexbox justifyContent="center" marginBottom="115">
							<img src="./images/screen-mockups.svg" alt="Screen Mockups" />
						</Flexbox>

						<Flexbox alignItems="center" justifyContent="space-between">
							<Flexbox justifyContent="space-between">
								<Flexbox justifyContent="center">
									<Counter paddingRight="35">
										<img
											src="./images/icon-communities.svg"
											alt="communities icon"
										/>
										<div>1.4k+</div>
										<p>Communities Formed</p>
									</Counter>
								</Flexbox>

								<Flexbox justifyContent="center">
									<Counter>
										<img
											src="./images/icon-messages.svg"
											alt="communities icon"
										/>
										<div>2.7m+</div>
										<p>Messages Sent</p>
									</Counter>
								</Flexbox>
							</Flexbox>
						</Flexbox>
					</Container>
				</StyledMain>

				<Section
					padding={"230px 0 180px"}
					topDivider="bg-section-top-desktop-1.svg"
				>
					<Divider>
						<img src="./images/bg-section-top-desktop-1.svg" alt="" />
					</Divider>
					<Section bgColor={theme.colors.neutral["very-pale-blue"]}>
						<Container>
							<Flexbox alignItems="center" justifyContent="space-between">
								<Column paddingRight={"110"}>
									<h2>Grow Together</h2>
									<p>
										Generate meaningful discussions with your audience and build
										a strong, loyal community. Think of the insightful
										conversations you miss out on with a feedback form.
									</p>
								</Column>
								<Column paddingRight="20" paddingLeft="10">
									<img
										src="./images/illustration-grow-together.svg"
										alt="Grow Together"
									/>
								</Column>
							</Flexbox>
						</Container>
					</Section>
				</Section>
			</main>
		</ThemeProvider>
	);
};

export default App;
