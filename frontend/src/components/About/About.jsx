import { Box, Container, Flex, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import HeaderText from "../HeaderText";

import SocialLinks from "../SocialLinks";
import CustomBtn from "../CustomBtn";
import { ReactTyped } from "react-typed";

const About = () => {
	return (
		<Container
			paddingBlock={"80px"}
			paddingInline={"10px"}
			id="about"
			transition={"all .2s ease-in-out"}
		>
			<HeaderText title={"About me"} desc={"who i am"} />

			<Container maxW={"1300px"}>
				<Flex
					flexWrap={{ base: "wrap", md: "nowrap" }}
					flexDir={"row"}
					alignItems={"start"}
					justifyContent={"space-around"}
					minChildWidth={"sm"}
					gap={10}
				>
					<Box
						rounded={"lg"}
						w={{ base: "270px", md: "340px" }}
						className="card"
						perspective={"1000px"}
						cursor={"pointer"}
					>
						<Box
							position={"relative"}
							textAlign={"center"}
							transformStyle={"preserve-3d"}
							transition={"transform 1s"}
							w={"100%"}
							className="card-inner"
						>
							<Box className="front-face" backfaceVisibility={"hidden"}>
								<Image
									width={"100%"}
									// h={"470px"}
									borderRadius={"10px"}
									src="/images/profile-pic.webp"
								/>
							</Box>
							<Box
								className="back-face"
								backfaceVisibility={"hidden"}
								position={"absolute"}
								bg={"#20232A"}
								color={"#fff"}
								h={"100%"}
								w={"100%"}
								top={0}
								left={0}
								display={"flex"}
								alignItems={"center"}
								justifyContent={"space-between"}
								py={10}
								gap={4}
								flexDir={"column"}
								borderRadius={"10px"}
							>
								<Box display={"flex"} flexDir={"column"} gap={4}>
									<Text
										as={"h2"}
										fontSize={{ base: 30, md: 50 }}
										lineHeight={1}
										className="font-bold"
										textTransform={"uppercase"}
									>
										Ridwan
									</Text>
									<Text fontSize={{ base: 20, md: 25 }} className="font-medium">
										I'll be your Developer
									</Text>
									<SocialLinks />
								</Box>
								<CustomBtn bgEffect={""}>
									<Link
										href="#"
										outline={"none"}
										color={"white"}
										alignSelf={"center"}
										justifySelf={"end"}
										display={"inline-block"}
									>
										Resume
									</Link>
								</CustomBtn>
							</Box>
						</Box>
					</Box>
					<Box w={{ base: "full", md: "50%" }}>
						<Text
							as="h3"
							fontSize={{ base: 25, md: 40 }}
							fontWeight={"bold"}
							className="font-semib"
							textAlign={{ base: "center", md: "initial" }}
							textWrap={"no-wrap"}
							transition={".4 ease-in-out"}
						>
							I'm Ridwan and
							{/* I'm a{" "} */}
							{/* <ReactTyped
								strings={["Front-End Developer"]}
								typeSpeed={130}
								backSpeed={40}
								style={{ color: "#fb923c" }}
								loop
							/> */}
						</Text>
						<Text
							fontSize={{ base: 15, md: 18 }}
							textIndent={5}
							_firstLetter={{
								fontSize: "39px",
								fontWeight: "bold",
								lineHeight: 1,
							}}
							className="font-thin"
						>
							I believe that excellent design and development are the invisible,
							and many times overlooked, aspects of every great thing. I want
							people to be moved by my designs, programs, and efficiency whether
							being moved to use them read them - OR - even be inspired by them.
							I deeply believe in design and development and not just as a
							service provider, but as a partner in the overall business and
							development process of the final product. It is critical to the
							success of any real company to have a website welcoming their
							clients and that is WHAT I'M HERE FOR.
						</Text>
					</Box>
				</Flex>
			</Container>
		</Container>
	);
};

export default About;
