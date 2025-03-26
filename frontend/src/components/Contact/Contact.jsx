import {
	Box,
	Container,
	Flex,
	Icon,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import HeaderText from "../HeaderText";
import { FaEnvelope, FaMapMarker, FaUser } from "react-icons/fa";
import CustomBtn from "../CustomBtn";
import { toaster } from "../ui/toaster";

const Contact = () => {
	const contactDetails = [
		{
			placeHolder: "Name",
			detail: "Ambali Ridwan",
			icon: <FaUser />,
		},
		{
			placeHolder: "Address",
			detail: "Karu, Abuja",
			icon: <FaMapMarker />,
		},
		{
			placeHolder: "Email",
			detail: "oladeleambali@gmail.com",
			icon: <FaEnvelope />,
		},
	];
	const [sendMail, setSendMail] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSendMail = async (newMail) => {
		try {
			const res = await fetch("http://localhost:5000/api/sendmail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newMail),
			});
			const data = await res.json();
			console.log(data);

			const { status, message } = data;

			if (!status) {
				toaster.create({
					title: "Error",
					description: message,
					type: "error",
					duration: 2000,
					isClosable: true,
				});
			} else {
				toaster.create({
					title: "Success",
					description: message,
					type: "success",
					duration: 2000,
					isClosable: true,
				});
				toaster.create({
					title: "Mail",
					description:
						"Thank you for reaching out, will get back to you shortly, 😊🚀",
					type: "info",
					duration: 5000,
				});
				setSendMail({ name: "", email: "", subject: "", message: "" });
			}
		} catch (error) {
			toaster.create({
				title: "Error Sending Mail",
				description: "Please check your internet connection",
				type: "error",
				duration: 5000,
				isClosable: true,
			});

			console.error(error.message);
		}
	};

	return (
		<Container id="contact" paddingBlock={"80px"}>
			<Container maxW={"1300px"}>
				<HeaderText title={"Contact"} desc={"Get in touch"} />

				<Flex
					justifyContent={"space-between"}
					alignItems={{ base: "center", md: "start" }}
					gap={10}
					flexDir={{ base: "column-reverse", md: "row" }}
				>
					<Box>
						<Box mb={7}>
							<Text as={"h1"} fontSize={35} className="font-bold">
								Get in Touch
							</Text>
							<Text fontSize={15}>
								Somewhat more about me! Reach out and keep in touch with me
							</Text>
						</Box>
						<Flex flexDir={"column"} gap={4}>
							{contactDetails.map((contact, index) => (
								<Flex key={index} alignItems={"center"} gap={5}>
									<Icon size={"lg"} color={"orange.400"}>
										{contact.icon}
									</Icon>
									<Box>
										<Text className="font-medium" fontSize={18}>
											{contact.placeHolder}
										</Text>
										<Text fontSize={16} className="font-thin">
											{contact.detail}
										</Text>
									</Box>
								</Flex>
							))}
						</Flex>
					</Box>
					<Box>
						<form>
							<Text as={"h2"} fontSize={25} className="font-semib">
								Message me
							</Text>
							<Flex className="fields" mt={"25px"} flexDir={"column"} gap={5}>
								<Flex gap={5}>
									<label style={{ cursor: "pointer" }}>
										Name
										<Input
											type="text"
											mt={2}
											focusRingColor={"orange.300"}
											ringColor={"rgba(66, 153, 225, 0.6)"}
											borderColor={"rgba(196, 196, 196, 0.6)"}
											p={"22px 10px"}
											placeholder="Name"
											value={sendMail.name}
											onChange={(e) =>
												setSendMail({ ...sendMail, name: e.target.value })
											}
										/>
									</label>
									<label style={{ cursor: "pointer" }}>
										Email
										<Input
											type="email"
											mt={2}
											focusRingColor={"orange.300"}
											ringColor={"rgba(66, 153, 225, 0.6)"}
											borderColor={"rgba(196, 196, 196, 0.6)"}
											p={"22px 10px"}
											placeholder="example@gmail.com"
											value={sendMail.email}
											onChange={(e) =>
												setSendMail({ ...sendMail, email: e.target.value })
											}
										/>
									</label>
								</Flex>
								<label style={{ cursor: "pointer" }}>
									Subject
									<Input
										type="text"
										mt={2}
										focusRingColor={"orange.300"}
										ringColor={"rgba(66, 153, 225, 0.6)"}
										borderColor={"rgba(196, 196, 196, 0.6)"}
										p={"22px 10px"}
										placeholder="Web Design, Ui Conversion, Frontend Dev"
										value={sendMail.subject}
										onChange={(e) =>
											setSendMail({ ...sendMail, subject: e.target.value })
										}
									/>
								</label>
								<label
									style={{
										cursor: "pointer",
										marginBottom: "30px",
										display: "inline",
									}}
								>
									Message
									<Textarea
										mt={2}
										focusRingWidth={"1px"}
										focusRingColor={"orange.300"}
										ringColor={"rgba(66, 153, 225, 0.6)"}
										borderColor={"rgba(196, 196, 196, 0.6)"}
										placeholder="I want to hire you to convert my figma designs to code 😊"
										p={"22px 10px"}
										value={sendMail.message}
										onChange={(e) =>
											setSendMail({ ...sendMail, message: e.target.value })
										}
									/>
								</label>

								<Box>
									<CustomBtn
										styles={{
											color: "black",
											marginTop: "-40px",
											fontSize: "16px",
										}}
										bgEffect={false}
										onClick={() => handleSendMail(sendMail)}
									>
										Send
									</CustomBtn>
								</Box>
							</Flex>
						</form>
					</Box>
				</Flex>
			</Container>
		</Container>
	);
};

export default Contact;
