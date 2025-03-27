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
import FullPageLoader from "./components/FullPageLoader";
import usePageLoad from "./context/usePageLoad";

function App() {
	const backgroundImage = "/images/bg-image.webp";
	const { isLoading } = usePageLoad(backgroundImage);
	const [isSticky, setSticky] = useState(false);

	useEffect(() => {
		// if (isLoading) {
		// 	document.body.style.overflow = "hidden";
		// } else {
		// 	document.body.style.overflow = "auto";
		// }

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
		<>
			{isLoading && <FullPageLoader />}
			<Container fluid margin={0} padding={0} pos={"relative"}>
				<BackToTop isSticky={isSticky} />
				<Container
					fluid
					bgImage={`url(${backgroundImage})`}
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
		</>
	);
}

export default App;
