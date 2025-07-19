import { useState } from "react";

function Education() {
  const [editEducationVisual, setEditVisual] = useState(true);

  const [education, setEducation] = useState({
    schoolName: "",
    titleStudy: "",
    dateStudy: "",
    yearsStudy: { startStudy: "", endStudy: "" },
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  }
  function submit(e) {
    e.preventDefault();
    setEditVisual(!editEducationVisual);
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

  function editEducation() {
    setEditVisual(!editEducationVisual);
  }

  return (
    <div>
      <p>EDUCATION</p>
      <form
        className={editEducationVisual ? "form-general" : "visible-general"}
        onSubmit={submit}
      >
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

      <div
        className={
          editEducationVisual ? "info-general visible-general" : "info-general"
        }
      >
        <p>
          School name: <span>{education.schoolName}</span>
        </p>
        <p>
          Title of study: <span>{education.titleStudy}</span>
        </p>
        <p>
          Study years:{" "}
          <span>
            {education.yearsStudy.startStudy} - {education.yearsStudy.endStudy}
          </span>
        </p>
        <button onClick={editEducation}>Edit</button>
      </div>
    </div>
  );
}

export default Education;
