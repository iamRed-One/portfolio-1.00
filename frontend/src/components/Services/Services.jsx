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
			className="appear"
			id="services"
			maxW={"full"}
			bg={"blackAlpha.800"}
			paddingBlock={"80px"}
			paddingInline={"30px"}
			color={"#fff"}
		>
			<Container maxW={"1300px"}>
				<HeaderText title={"My services"} desc={"what i do"} />

				<Flex justifyContent={"center"} flexWrap={"wrap"} gap={5} w={"100%"}>
					{services.map(({ num, icon, title, desc }) => (
						<Box
							className="service-card"
							key={num}
							w={{
								base: "100%",
								md: "350px",
							}}
							bg={"orange.400"}
							padding={"25px 20px"}
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
								clipPath: {
									base: "circle(20% at 0 0)",
									md: "circle(25% at 0 0)",
								},
								opacity: 0.2,
								transition: "0.3s",
								bg: "orange.100",
							}}
						>
							<Text
								as={"span"}
								fontSize={{ base: 20, md: 25 }}
								top={"1.2rem"}
								left={"1.4rem"}
								position={"absolute"}
							>
								{num}
							</Text>

							<Box
								mt={{ base: "20px", md: "30px" }}
								display="flex"
								flexDir={"column"}
								alignItems={"center"}
								gap={4}
								zIndex={3}
							>
								<Icon textAlign={"center"} size={{ base: "sm", md: "lg" }}>
									{icon}
								</Icon>
								<Text
									as={"h2"}
									fontSize={{ base: 22, md: 25 }}
									fontWeight={"bolder"}
									color={"blackAlpha.800"}
								>
									{title}
								</Text>
								<Text fontSize={{ base: 13, md: 15 }}>{desc}</Text>
							</Box>
						</Box>
					))}
				</Flex>
			</Container>
		</Container>
	);
};

export default Services;
