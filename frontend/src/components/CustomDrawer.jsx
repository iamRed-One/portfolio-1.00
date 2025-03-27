import React from "react";
import { CloseButton, Drawer, Flex, Link, Portal } from "@chakra-ui/react";

const CustomDrawer = ({ navItems }) => {
	return (
		<Portal>
			<Drawer.Backdrop>
				<Drawer.Positioner>
					<Drawer.Content bg={"#fff"}>
						<Drawer.CloseTrigger asChild>
							<CloseButton size={"lg"} />
						</Drawer.CloseTrigger>
						<Drawer.Body>
							<Flex
								flexDir={"column"}
								justifyContent={"center"}
								alignItems={"center"}
								pt={20}
								gap={10}
								fontSize={25}
								className="font-semib"
							>
								{navItems.map((item, index) => (
									<Link
										key={index}
										href={`#${item.item}`}
										textTransform={"capitalize"}
									>
										{item.item}
									</Link>
								))}
							</Flex>
						</Drawer.Body>
					</Drawer.Content>
				</Drawer.Positioner>
			</Drawer.Backdrop>
		</Portal>
	);
};

export default CustomDrawer;
