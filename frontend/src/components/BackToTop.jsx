import { Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = ({ isSticky }) => {
	return (
		<Link
			href="#home"
			pos={"fixed"}
			zIndex={99999}
			h={"40px"}
			w={"40px"}
			p={5}
			clipPath={"circle(100%)"}
			borderRadius={"50%"}
			bottom={"30px"}
			right={"40px"}
			bg={"orange.400"}
			color={"#fff"}
			display={"flex"}
			justifyContent={"center"}
			opacity={isSticky ? 1 : 0}
			visibility={isSticky ? "visible" : "hidden"}
			alignItems={"center"}
			cursor={"pointer"}
			transition={".2s ease-in-out"}
		>
			<Icon size={"md"}>
				<FaArrowUp />
			</Icon>
		</Link>
	);
};

export default BackToTop;
