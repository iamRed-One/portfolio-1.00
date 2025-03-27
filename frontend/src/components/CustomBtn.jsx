import React from "react";
import { useColorModeValue } from "./ui/color-mode";
import { Button } from "@chakra-ui/react";

const CustomBtn = ({ children, styles, bgEffect, b4Radius, onClick }) => {
	return (
		<Button
			onClick={onClick}
			style={styles}
			p={"28px 40px"}
			fontSize={{ base: 16, md: 18 }}
			rounded={"md"}
			size={"lg"}
			bg={"transparent"}
			color={useColorModeValue("white", "white")}
			zIndex={"10"}
			border={"4px solid orange"}
			borderColor={"orange.400"}
			_before={{
				content: '""',
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "absolute",
				bottom: "10%",
				height: "0%",
				w: "95%",
				bg: bgEffect == "" || false ? "orange.400" : bgEffect,
				zIndex: "-3",
				transition: ".2s ease-in-out",
				rounded: b4Radius == " " ? "sm" : b4Radius,
			}}
			_hover={{ _before: { h: "80%" } }}
			letterSpacing={2}
			className="font-medium"
		>
			{children}
		</Button>
	);
};

export default CustomBtn;
