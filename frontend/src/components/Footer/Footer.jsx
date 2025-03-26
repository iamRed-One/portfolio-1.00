import { Box, Container, Icon, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SocialLinks from "../SocialLinks";
import { FaCode } from "react-icons/fa";

const Footer = () => {
	return (
		<Container fluid paddingBlock={"50px"} bg={"blackAlpha.800"} color={"#fff"}>
			<Container maxW={"1300px"}>
				<VStack spaceY={4} textAlign={"center"}>
					<Link href="" color={"white"} textDecoration={"none"}>
						<Text fontSize={30} fontWeight={"bold"} className="font-bold">
							C
							<Text as={"span"} color={"orange.400"}>
								0
							</Text>
							de Red{" "}
							<Icon color={"orange.400"}>
								<FaCode />
							</Icon>
						</Text>
					</Link>
					<Text>
						Thank you for going through my portfolio. Click on the hire button
						above to set your project in motion.
					</Text>

					<Box paddingBlock={5}>
						<SocialLinks />
					</Box>
					<Text>Copyright &copy;2025 | Designed by Ridwan</Text>
				</VStack>
			</Container>
		</Container>
	);
};

export default Footer;
