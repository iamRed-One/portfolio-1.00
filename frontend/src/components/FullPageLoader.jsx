import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const FullPageLoader = () => {
	return (
		<Box
			position={"fixed"}
			top={0}
			left={0}
			width={"100vw"}
			height={"100vh"}
			display={"flex"}
			alignItems={"center"}
			justifyContent={"center"}
			bg={"white"}
			zIndex={99999}
		>
			<Spinner
				size={{ base: "sm", md: "xl" }}
				borderWidth={"10px"}
				color={"orange.400"}
			/>
		</Box>
	);
};

export default FullPageLoader;
