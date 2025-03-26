import {
	Box,
	Container,
	Flex,
	Icon,
	Link,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import React from "react";
import HeaderText from "../HeaderText";
import services from "./Data";

const Services = () => {
	return (
		<Container
			id="services"
			maxW={"full"}
			bg={"blackAlpha.800"}
			paddingBlock={"80px"}
			color={"#fff"}
		>
			<Container maxW={"1300px"}>
				<HeaderText title={"My services"} desc={"what i do"} />

				<Flex justifyContent={"center"} flexWrap={"wrap"} gap={7} w={"100%"}>
					{services.map(({ num, icon, title, desc }) => (
						<Box
							className="service-card"
							key={num}
							w={{
								base: "320px",
								md: "350px",
							}}
							bg={"orange.400"}
							padding={"20px 40px"}
							rounded={"lg"}
							display={"flex"}
							flexDir={"column"}
							gap={3}
							textAlign={"center"}
							position={"relative"}
							_before={{
								position: "absolute",
								content: '"1"',
								top: 0,
								left: 0,
								height: "100%",
								width: "100%",
								clipPath: "circle(25% at 0 0)",
								opacity: 0.2,
								transition: "0.3s",
								bg: "orange.100",
							}}
						>
							<Text
								as={"span"}
								fontSize={26}
								top={"1.2rem"}
								left={"1.4rem"}
								position={"absolute"}
							>
								{num}
							</Text>

							<Box
								mt={"29px"}
								display="flex"
								flexDir={"column"}
								alignItems={"center"}
								gap={4}
								zIndex={3}
							>
								<Icon textAlign={"center"} size={"lg"}>
									{icon}
								</Icon>
								<Text
									as={"h2"}
									fontSize={24}
									color={"orange.700"}
									fontWeight={"bolder"}
								>
									<Link
										textDecoration={"none"}
										target="_blanck"
										color={"blackAlpha.800"}
										href="#"
										outline={"none"}
										_hover={{ scale: 1.1, transition: "all .3s ease-in-out" }}
									>
										{title}
									</Link>
								</Text>
								<Text fontSize={15}>{desc}</Text>
							</Box>
						</Box>
					))}
				</Flex>
			</Container>
		</Container>
	);
};

export default Services;
