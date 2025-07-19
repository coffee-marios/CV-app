import { useState } from "react";

function Experience() {
  const [editVisible, setVisible] = useState(true);
  const [experience, setExperience] = useState({
    companyName: "",
    position: "",
    main_responsibility: "",
  });

  function submit(e) {
    e.preventDefault();
    setVisible(!editVisible);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  }

  function editGeneral() {
    setVisible(!editVisible);
  }

  return (
    <div>
      <p>EXPERIENCE</p>

      <form
        className={editVisible ? "form-general" : "visible-general"}
        onSubmit={submit}
      >
        <p>Company name:</p>
        <input
          type="text"
          name="companyName"
          value={experience.companyName}
          onChange={handleChange}
        />
        <p>Position title:</p>
        <input
          type="text"
          name="position"
          value={experience.position}
          onChange={handleChange}
        />
        <p>Main responsibilities of your job:</p>
        <textarea
          type="text"
          name="main_responsibility"
          value={experience.main_responsibility}
          onChange={handleChange}
          id=""
        ></textarea>
        <br />
        <button type="submit">Save</button>
      </form>
      <div
        className={
          editVisible ? "info-general visible-general" : "info-general"
        }
      >
        <p>
          Company name: <span>{experience.companyName}</span>
        </p>
        <p>
          Position title: <span>{experience.position}</span>{" "}
        </p>
        <p>Main responsibilities of your job:</p>
        <p>
          <span>{experience.main_responsibility}</span>
        </p>
        <button onClick={editGeneral}>Edit</button>
      </div>
    </div>
  );
}

export default Experience;
