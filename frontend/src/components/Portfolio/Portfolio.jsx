import {
	Box,
	Container,
	Flex,
	Icon,
	Image,
	Link,
	SimpleGrid,
	Tabs,
	Text,
} from "@chakra-ui/react";
import HeaderText from "../HeaderText";
import { FaGithub } from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";
import items from "./Data";

const Portfolio = () => {
	return (
		<Container
			id="portfolio"
			maxW={"full"}
			bg={"blackAlpha.800"}
			paddingBlock={"80px"}
			paddingInline={"30px"}
			color={"#fff"}
		>
			<Container maxW={"1300px"}>
				<HeaderText title={"My Portfolio"} desc={"past projects"} />

				<Flex justifyContent={"center"} alignItems={"center"}>
					<Tabs.Root defaultValue="All" width={"full"} variant={"plain"}>
						<Tabs.List w={"full"} border={0} p="1" justifyContent={"center"}>
							{items.map((item, index) => (
								<Tabs.Trigger
									key={index}
									value={item.title}
									color={"#fff"}
									mr={"10px"}
									borderWidth={"2px"}
									borderColor={"orange.400"}
									display={"flex"}
									justifyContent={"center"}
									alignItems={"center"}
									fontSize={{ base: 15, md: 18 }}
									w={{ base: "100px", md: "140px" }}
									h={"50px"}
									rounded={"md"}
									bg={"transparent"}
								>
									{item.title}
								</Tabs.Trigger>
							))}
							<Tabs.Indicator
								border={0}
								position={"relative"}
								bg={"orange.400"}
								rounded={"md"}
							/>
						</Tabs.List>
						<Box mt={10}>
							{items.map((item, index) => (
								<Tabs.Content
									key={index}
									outline={"none"}
									color={"#fff"}
									value={item.title}
									inset={0}
									_open={{
										animationName: "fade-in, scale-in",
										animationDuration: "300ms",
									}}
									_closed={{
										animationName: "fade-out scale-out",
										animationDuration: "120ms",
									}}
								>
									<SimpleGrid
										minChildWidth={"320px"}
										justifyContent={"center"}
										alignItems={"center"}
										flexWrap={"wrap"}
										gap={5}
									>
										{item.content.map((port, index) => (
											<Box
												key={index}
												// w={{
												// 	base: "100%",
												// 	md: "350px",
												// }}
												h={"250px"}
												border={"7px solid"}
												borderColor={"orange.400"}
												pos={"relative"}
												rounded={"lg"}
												cursor={"pointer"}
												className="show-box-container"
											>
												<Image
													src={port.image}
													alt="code_red"
													objectFit={"cover"}
													w={"full"}
													h={"full"}
													rounded={"sm"}
												/>
												<Box
													className="show-box"
													pos={"absolute"}
													transition={".2s ease-in-out"}
													top={0}
													left={0}
													visibility={"hidden"}
													display={"flex"}
													justifyContent={"center"}
													alignItems={"center"}
													w={"full"}
													h={"full"}
													textAlign={"center"}
													scale={0.1}
													opacity={1}
													zIndex={10}
												>
													<Box
														w={"100%"}
														height={"100%"}
														rounded={"sm"}
														bg={"orange.300"}
														padding={10}
														display={"flex"}
														flexDir={"column"}
														justifyContent={"start"}
														alignItems={"center"}
														gap={2}
													>
														<Text
															as={"h1"}
															fontSize={33}
															color={"black"}
															className="font-bold"
															opacity={1}
														>
															{port.title}
														</Text>
														<Flex gap={8}>
															<Link
																href={port.gitHubUrl}
																target="_blank"
																fontSize={18}
																_hover={{
																	textDecoration: "none",
																	borderColor: "black",
																}}
																color={"blackAlpha.800"}
																className="font-medium"
																borderBottom={"3px dotted #fff"}
															>
																Github
																<Icon fontSize={"18px"}>
																	<FaGithub />
																</Icon>
															</Link>
															<Link
																href={port.liveSite}
																target="_blank"
																fontSize={18}
																_hover={{
																	textDecoration: "none",
																	borderColor: "black",
																}}
																color={"blackAlpha.800"}
																className="font-medium"
																borderBottom={"3px dotted #fff"}
															>
																Live Site
																<Icon fontSize={"18px"}>
																	<BiArrowToTop />
																</Icon>
															</Link>
														</Flex>
													</Box>
												</Box>
											</Box>
										))}
									</SimpleGrid>
								</Tabs.Content>
							))}
						</Box>
					</Tabs.Root>
				</Flex>
			</Container>
		</Container>
	);
};

export default Portfolio;
