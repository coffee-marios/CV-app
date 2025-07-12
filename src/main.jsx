import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import FormContainer from "./components/FormContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormContainer />
  </StrictMode>
);
