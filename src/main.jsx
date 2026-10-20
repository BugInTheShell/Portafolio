import { createRoot } from "react-dom/client";
import "@fontsource/vt323/400.css";
import "@fontsource/silkscreen/400.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "./styles/main.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
