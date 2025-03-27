import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import BackToTop from "./components/BackToTop";
import { Toaster } from "./components/ui/toaster";
import Footer from "./components/Footer/Footer";

function App() {
	const [isSticky, setSticky] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.pageYOffset > 100) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	return (
		<Container fluid margin={0} padding={0} pos={"relative"}>
			<BackToTop isSticky={isSticky} />
			<Container
				fluid
				data-aos="fade-up"
				bgImage={"url(/images/bg-image.webp)"}
				bgRepeat={"no-repeat"}
				backgroundPosition={"center"}
				bgAttachment={"fixed"}
				bgSize={"cover"}
			>
				<Navbar isSticky={isSticky} />
				<Hero />
			</Container>
			<About />
			<Services />
			<Skills />
			<Portfolio />
			<Contact />
			<Footer />
			<Toaster />
		</Container>
	);
}

export default App;
