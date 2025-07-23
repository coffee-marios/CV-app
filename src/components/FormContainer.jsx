import Education from "./Education";
import Experience from "./Experience";
import General from "./General";

import "../styles/FormContainer.css";

import { useState } from "react";

export default function FormContainer() {
  const [containerVisible, setVisibity] = useState(true);
  // General
  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    age: 21,
    email: "",
    phone: "",
  });
  function exit() {
    setVisibity(!containerVisible);
  }

  return (
    <>
      <div className={containerVisible ? "visible-general" : "exit-block"}>
        {" "}
        <p>Thank you for visiting out site.</p>
        <button onClick={exit}>Edit</button>
      </div>
      <div className={containerVisible ? "container-form" : "visible-general"}>
        <div className="forms-components">
          <General general={general} setGeneral={setGeneral} />
          <Education />
          <Experience />
        </div>
        <button onClick={exit}>Exit</button>
      </div>
    </>
  );
}
