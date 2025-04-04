import { Container, Flex, Text, Box, Link } from "@chakra-ui/react";
import React from "react";
import { useColorModeValue } from "../ui/color-mode";
import { ReactTyped } from "react-typed";
import CustomBtn from "../CustomBtn";

const Hero = () => {
	return (
		<Container fluid id="home" h={"100vh"} maxW={"1300px"}>
			<Flex
				flexDir={{ base: "column", md: "column" }}
				justifyContent={"center"}
				alignItems={{ base: "center", md: "start" }}
				h={"full"}
				textAlign={{ base: "center", md: "start" }}
				color={useColorModeValue("white", "white")}
				gap={{ base: 2, md: "0" }}
			>
				<Text as={"h3"} fontSize={24} lineHeight={"1"} className="font-semib">
					Hello, my name is
				</Text>
				<Text
					as={"h2"}
					className="font-medium"
					fontWeight={"bolder"}
					fontSize={{ base: 38, md: 70 }}
				>
					Ambali Ridwan
				</Text>
				<Text as={"h3"} fontSize={24} lineHeight={"1"} className="font-semib">
					And I'm a{" "}
					<Text
						as={"span"}
						display={{ base: "block", md: "inline" }}
						mt={{ base: "10px", md: 0 }}
					>
						<ReactTyped
							strings={["Front End Developer"]}
							typeSpeed={100}
							style={{ color: "#fb923c" }}
							// cursorChar="{}"
							backSpeed={20}
							loop
						/>
					</Text>
				</Text>
				<Box mt={10}>
					<Link href="#contact">
						<CustomBtn bgEffect={""}>Hire Me</CustomBtn>
					</Link>
				</Box>
			</Flex>
		</Container>
	);
};

export default Hero;
