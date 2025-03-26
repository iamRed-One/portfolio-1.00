import { Box, Text } from "@chakra-ui/react";
import React from "react";

const HeaderText = ({ title, desc }) => {
	return (
		<Box
			w="full"
			display={"flex"}
			flexDir={"column"}
			justifyContent={"center"}
			alignItems={"center"}
			mb={"60px"}
			gap={1}
		>
			<Text as={"h2"} fontWeight={"bold"} fontSize={40} className="font-bold">
				{title}
			</Text>
			<Box
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={3}
			>
				<Text as={"span"} w={"70px"} h={"3px"} bg={"orange.400"}></Text>
				<Text fontSize={18} className="font-medium">
					{desc}
				</Text>
				<Text as={"span"} w={"70px"} h={"3px"} bg={"orange.400"}></Text>
			</Box>
		</Box>
	);
};

export default HeaderText;
