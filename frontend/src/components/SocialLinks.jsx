import { Box, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiChessdotcom } from "react-icons/si";

const SocialLinks = () => {
	const links = [
		{
			link: "https://www.linkedin.com/in/ambali-ridwan-936065228/",
			icon: <FaLinkedin />,
		},
		{
			link: "https://x.com/Code_Red_One",
			icon: <FaTwitter />,
		},
		{
			link: "https://www.chess.com/member/focusedonmate",
			icon: <SiChessdotcom />,
		},
		{
			link: "https://github.com/iamRed-One",
			icon: <FaGithub />,
		},
	];
	return (
		<Box display={"flex"} gap={2} justifyContent={"center"} fontSize={18}>
			{links.map((link, index) => (
				<Link
					key={index}
					href={link.link}
					bg={"orange.400"}
					target="_blank"
					color={"white"}
					rounded={"full"}
					padding={3}
					transition={"all .2s ease-in-out"}
					_hover={{ bg: "#fff", color: "orange.400" }}
				>
					<Icon size={{ base: "sm", md: "lg" }}>{link.icon}</Icon>
				</Link>
			))}
		</Box>
	);
};

export default SocialLinks;
