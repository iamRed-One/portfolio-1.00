import { FaCss3, FaGit, FaHtml5, FaReact } from "react-icons/fa";
import { DiJavascript, DiMongodb, DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const skills = [
	{
		title: "HTML 5",
		icon: <FaHtml5 />,
		percentage: "80%",
		skillColor: "#E34F26",
		skillBgColor: "#F5F5F5",
	},
	{
		title: "CSS 3",
		icon: <FaCss3 />,
		percentage: "80%",
		skillColor: "#264DE4",
		skillBgColor: "#F0F8FF",
	},
	{
		title: "JAVASCRIPT",
		icon: <DiJavascript />,
		percentage: "60%",
		skillColor: "#F7DF1E",
		skillBgColor: "#2D2D2D",
	},
	{
		title: "REACT",
		icon: <FaReact />,
		percentage: "70%",
		skillColor: "#61DAFB",
		// skillBgColor: "#282C34",
		skillBgColor: "#20232A",
	},
	{
		title: "EXPRESS JS",
		icon: <SiExpress />,
		percentage: "50%",
		skillColor: "#000000",
		skillBgColor: "#F5F5F5",
	},
	{
		title: "MONDO DB",
		icon: <DiMongodb />,
		percentage: "60%",
		skillColor: "#47A248",
		skillBgColor: "#F0FFF0",
	},
	{
		title: "NODE JS",
		icon: <DiNodejs />,
		percentage: "80%",
		skillColor: "#339933",
		skillBgColor: "#F0FFF0",
	},
	{
		title: "Git",
		icon: <FaGit />,
		percentage: "80%",
		skillColor: "#F05032",
		skillBgColor: "#2D2D2D",
	},
];

export default skills;
