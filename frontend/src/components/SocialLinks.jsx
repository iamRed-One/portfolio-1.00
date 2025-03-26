import { Box, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiChessdotcom } from "react-icons/si";

const SocialLinks = () => {
	return (
		<Box display={"flex"} gap={2} justifyContent={"center"} fontSize={18}>
			<Link
				href="https://www.linkedin.com/in/ambali-ridwan-936065228/"
				bg={"orange.400"}
				target="_blank"
				color={"white"}
				rounded={"full"}
				padding={3}
				transition={"all .2s ease-in-out"}
				_hover={{ bg: "#fff", color: "orange.400" }}
			>
				<Icon size={"lg"}>
					<FaLinkedin />
				</Icon>
			</Link>
			<Link
				href="https://x.com/Code_Red_One"
				bg={"orange.400"}
				target="_blank"
				color={"white"}
				rounded={"full"}
				padding={3}
				transition={"all .2s ease-in-out"}
				_hover={{ bg: "#fff", color: "orange.400" }}
			>
				<Icon size={"lg"}>
					<FaTwitter />
				</Icon>
			</Link>
			<Link
				href="https://www.chess.com/member/focusedonmate"
				bg={"orange.400"}
				target="_blank"
				color={"white"}
				rounded={"full"}
				padding={3}
				transition={"all .2s ease-in-out"}
				_hover={{ bg: "#fff", color: "orange.400" }}
			>
				<Icon size={"lg"}>
					<SiChessdotcom />
				</Icon>
			</Link>
			<Link
				href="https://github.com/iamRed-One"
				bg={"orange.400"}
				target="_blank"
				color={"white"}
				rounded={"full"}
				padding={3}
				transition={"all .2s ease-in-out"}
				_hover={{ bg: "#fff", color: "orange.400" }}
			>
				<Icon size={"lg"}>
					<FaGithub />
				</Icon>
			</Link>
		</Box>
	);
};

export default SocialLinks;
