import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logo from "./assets/televisor-logo.png";

// Set favicon at runtime so it matches the header logo (Vite will resolve the correct URL)
function setFavicon(href: string) {
	try {
		const existing = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
		if (existing) {
			existing.href = href;
			return;
		}
		const link = document.createElement("link");
		link.rel = "icon";
		link.href = href;
		document.head.appendChild(link);
	} catch (e) {
		// silent fallback
		// browsers will still use public/favicon.ico if present
	}
}

setFavicon(logo);
createRoot(document.getElementById("root")!).render(<App />);
