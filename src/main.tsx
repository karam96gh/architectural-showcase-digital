import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { startArabicDigits } from "./lib/arabicDigits";

const root = document.getElementById("root")!;
createRoot(root).render(<App />);
startArabicDigits(root);
