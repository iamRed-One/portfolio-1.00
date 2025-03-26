import { Box, Container, Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import HeaderText from "../HeaderText";
import skills from "./Data";

const Skills = () => {
	return (
		<Container paddingBlock={"80px"} id="skills">
			<Container maxW={"1300px"}>
				<HeaderText title={"My Skills"} desc={"What i know"} />

				<SimpleGrid
					templateColumns={{ base: "1fr", md: "1fr 1fr" }}
					alignItems={"center"}
					mt={"50px"}
					textAlign={{ base: "center", md: "start" }}
					gap={10}
				>
					<Box>
						<Text as="h1" fontSize={40} fontWeight={"bolder"}>
							My Creative Skills
						</Text>
						<Text
							fontSize={17}
							textIndent={5}
							_firstLetter={{
								fontSize: "39px",
								fontWeight: "bold",
								lineHeight: 1,
							}}
							className="font-thin"
						>
							I’m a passionate and detail-oriented web developer who brings
							ideas to life through clean, efficient, and innovative code. With
							a strong foundation in front-end and back-end technologies, I
							specialize in crafting responsive, user-friendly websites that not
							only look stunning but also deliver seamless functionality. From
							designing pixel-perfect layouts to building robust server-side
							solutions, I thrive on turning complex challenges into elegant
							digital experiences. Whether it’s HTML, CSS, JavaScript, or diving
							into frameworks like React and Node.js, I love the process of
							creating something meaningful from scratch.
						</Text>
					</Box>
					<Box>
						<Flex
							w={"100%"}
							flexWrap={"wrap"}
							gap={7}
							justifyContent={"center"}
						>
							{skills.map(({ title, icon, skillColor, skillBgColor }) => (
								<Box
									key={title}
									className="service-card"
									bg={skillBgColor}
									w={"120px"}
									rounded={"lg"}
									padding={"17px 10px"}
									textAlign={"center"}
									position={"relative"}
									cursor={"pointer"}
									_before={{
										position: "absolute",
										content: '""',
										top: 0,
										left: 0,
										height: "100%",
										width: "100%",
										clipPath: "circle(25% at 0 0)",
										opacity: 0.2,
										transition: "0.3s",
										bg: "orange.100",
									}}
									_hover={{ scale: 1.1, transition: ".2s" }}
								>
									{/* <Text
											position={"absolute"}
											top={-2}
											right={-3}
											display={"flex"}
											alignItems={"center"}
											justifyContent={"center"}
											h={"30px"}
											w={"30px"}
											borderRadius={"50%"}
											bg={skillBgColor}
											color={skillColor}
											fontSize={11}
											padding={1}
											opacity={0.9}
											fontWeight={"bold"}
										>
											{percentage}
										</Text> */}
									<Icon color={skillColor} fontSize={40} mb={3}>
										{icon}
									</Icon>
									<Text
										fontSize={15}
										color={skillColor}
										className="font-medium"
									>
										{title}
									</Text>
								</Box>
							))}
						</Flex>
					</Box>
				</SimpleGrid>
			</Container>
		</Container>
	);
};

export default Skills;
