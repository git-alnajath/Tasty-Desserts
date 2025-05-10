import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DessertApp_main from "./DessertApp-main";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DessertApp_main />
  </StrictMode>
);
