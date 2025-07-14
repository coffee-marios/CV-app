import { useState } from "react";

function Experience() {
  const [experience, setExperience] = useState({
    companyName: "Nasa",
    position: "president",
    main_responsibility: "",
  });

  function submit(e) {
    e.preventDefault();
    console.log(e);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div>
      <p>EXPERIENCE</p>

      <form className="form-general" action={submit}>
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
      <div className="info-general">
        <p>Company name: {experience.companyName}</p>
        <p>Position title: {experience.position}</p>
        <p>Main responsibilities of your job:</p>
        <p>{experience.main_responsibility}</p>
      </div>
    </div>
  );
}

export default Experience;
