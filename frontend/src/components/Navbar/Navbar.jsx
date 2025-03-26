import {
	Box,
	Button,
	Container,
	Drawer,
	Flex,
	HStack,
	Icon,
	Link,
	Text,
} from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import { CiMenuFries } from "react-icons/ci";
import CustomDrawer from "../customDrawer";
import { FaCode } from "react-icons/fa";

const Navbar = ({ isSticky }) => {
	const navItems = [
		{
			item: "home",
		},
		{
			item: "about",
		},
		{
			item: "services",
		},
		{
			item: "skills",
		},
		{
			item: "portfolio",
		},
		{
			item: "contact",
		},
	];

	return (
		<Container
			maxW="full"
			padding={isSticky ? 3 : 7}
			transition={"all .2s ease-in-out"}
			bg={isSticky && "blackAlpha.800"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			position={"fixed"}
			left={0}
			right={0}
			zIndex={30}
		>
			<Container maxW="1300px">
				<Drawer.Root size={"sm"}>
					<Flex
						justifyContent={"space-between"}
						alignItems={"center"}
						color={useColorModeValue("white", "white")}
					>
						<Box>
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
						</Box>
						<Box display={"flex"} gap={7}>
							<HStack
								_color={useColorModeValue("white", "white")}
								flexDir={{ base: "column", md: "row" }}
								display={{ base: "none", md: "flex" }}
								gap={7}
								fontSize={18}
								className="font-semib"
							>
								{navItems.map((item, index) => (
									<Link
										key={index}
										href={`#${item.item}`}
										// eslint-disable-next-line react-hooks/rules-of-hooks
										color={useColorModeValue("white", "white")}
										textTransform={"capitalize"}
										transition={".2s ease-in-out"}
										_hover={{ scale: 1.2, textDecoration: "none" }}
									>
										{item.item}
									</Link>
								))}
							</HStack>

							<Box display={{ base: "block", md: "none" }} fontSize={17}>
								<Drawer.Trigger asChild>
									<Button bg={"orange.400"}>
										<CiMenuFries />
									</Button>
								</Drawer.Trigger>
							</Box>
						</Box>
					</Flex>

					<CustomDrawer navItems={navItems} />
				</Drawer.Root>
			</Container>
		</Container>
	);
};

export default Navbar;
