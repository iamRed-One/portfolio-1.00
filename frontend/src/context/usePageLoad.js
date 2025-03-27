// hooks/usePageLoader.js
import { useState, useEffect } from "react";
const usePageLoad = (backgroundImageUrl) => {
	const [isLoading, setIsLoading] = useState(true);
	const [imagesLoaded, setImagesLoaded] = useState(false);
	const [contentLoaded, setContentLoaded] = useState(false);

	useEffect(() => {
		// Track DOM content loading
		const handleDOMContentLoaded = () => setContentLoaded(true);

		if (document.readyState === "complete") {
			setContentLoaded(true);
		} else {
			document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
			window.addEventListener("load", handleDOMContentLoaded);
		}

		// Track background image loading
		const img = new Image();
		img.src = backgroundImageUrl;

		const handleImageLoad = () => {
			setImagesLoaded(true);
			// Also check if other images are loaded
			checkAllImages();
		};

		img.addEventListener("load", handleImageLoad);
		img.addEventListener("error", handleImageLoad); // Continue even if bg fails

		// Track all other images
		const checkAllImages = () => {
			const images = Array.from(
				document.querySelectorAll('img:not([src="' + backgroundImageUrl + '"])')
			);

			if (images.length === 0) return setImagesLoaded(true);

			let loadedCount = 0;
			const handleEachImageLoad = () => {
				loadedCount++;
				if (loadedCount === images.length) setImagesLoaded(true);
			};

			images.forEach((img) => {
				if (img.complete) handleEachImageLoad();
				else img.addEventListener("load", handleEachImageLoad);
			});
		};

		// Fallback timeout
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 5000);

		return () => {
			document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
			window.removeEventListener("load", handleDOMContentLoaded);
			img.removeEventListener("load", handleImageLoad);
			img.removeEventListener("error", handleImageLoad);
			clearTimeout(timeout);
		};
	}, [backgroundImageUrl]);

	useEffect(() => {
		if (contentLoaded && imagesLoaded) {
			setTimeout(() => setIsLoading(false), 500); // Smooth transition
		}
	}, [contentLoaded, imagesLoaded]);

	return isLoading;
};

export default usePageLoad;

// import { useState, useEffect } from "react";

// export default function usePageLoad() {
// 	const [isLoading, setIsLoading] = useState(true);

// 	useEffect(() => {
// 		const handleLoad = () => setIsLoading(false);
// 		const images = Array.from(document.images);
// 		console.log(images);

// 		if (images.every((img) => img.complete)) {
// 			handleLoad();
// 		} else {
// 			images.forEach((img) => {
// 				img.addEventListener("load", handleLoad);
// 				img.addEventListener("error", handleLoad);
// 			});
// 		}
// 		const timeout = setTimeout(handleLoad, 3000);
// 		return () => {
// 			images.forEach((img) => {
// 				img.addEventListener("load", handleLoad);
// 				img.addEventListener("error", handleLoad);
// 			});
// 			clearTimeout(timeout);
// 		};
// 	}, []);

// 	return isLoading;
// }
