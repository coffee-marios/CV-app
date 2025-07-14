import Education from "./Education";
import Experience from "./Experience";
import General from "./General";

import "../styles/FormContainer.css";

import { useState } from "react";

export default function FormContainer() {
  function submit(e) {
    console.log(e);
  }
  return (
    <div className="container-form">
      <General />

      <Education />
      <Experience />
    </div>
  );
}
