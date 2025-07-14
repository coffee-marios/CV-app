import { useState } from "react";

function Education() {
  const [education, setEducation] = useState({
    schoolName: "LOL",
    titleStudy: "PHD",
    dateStudy: "2020-2024",
    yearsStudy: { startStudy: "", endStudy: "" },
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  }
  function submit(e) {
    e.preventDefault();
    console.log(e);
  }
  function handleYears(e) {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      yearsStudy: {
        ...prev.yearsStudy,
        [name]: value === "" ? "" : Number(value),
      },
    }));
  }

  return (
    <div>
      <p>EDUCATION</p>
      <form className="form-general" onSubmit={submit}>
        <p>School name:</p>
        <input
          type="text"
          name="schoolName"
          value={education.schoolName}
          onChange={handleChange}
        />
        <p>Title of study:</p>
        <input
          type="text"
          name="titleStudy"
          value={education.titleStudy}
          onChange={handleChange}
        />

        <p>Years of highest education:</p>
        <p>First year:</p>
        <input
          type="number"
          name="startStudy"
          value={education.yearsStudy.firstYear}
          onChange={handleYears}
          min="1999"
          step="1"
        />
        <p>Last year</p>
        <input
          type="number"
          name="endStudy"
          value={education.yearsStudy.firstYear}
          onChange={handleYears}
          min="1999"
          step="1"
        />

        <br />
        <button type="submit">Save</button>
      </form>

      <div className="info-general">
        <p>School name: {education.schoolName}</p>
        <p>Title of study: {education.titleStudy}</p>
        <p>
          Study years: {education.yearsStudy.startStudy} -{" "}
          {education.yearsStudy.endStudy}
        </p>
      </div>
    </div>
  );
}

export default Education;
