import { useState } from "react";

function Education() {
  const [editEducationVisual, setEditVisual] = useState(true);

  const date = new Date();
  const year = date.getFullYear();

  const [education, setEducation] = useState({
    schoolName: "",
    titleStudy: "",
    dateStudy: "",
    yearsStudy: { startStudy: "1999", endStudy: "1999" },
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
      <h1 className="form-title">EDUCATION</h1>
      <form
        className={editEducationVisual ? "form-general" : "visible-general"}
        onSubmit={submit}
      >
        <p>School name:</p>
        <label htmlFor="schoolName"> </label>

        <input
          type="text"
          name="schoolName"
          value={education.schoolName}
          onChange={handleChange}
          required
        />
        <p>Title of study:</p>
        <label htmlFor="titleStudy"> </label>

        <input
          type="text"
          name="titleStudy"
          value={education.titleStudy}
          onChange={handleChange}
          required
        />

        <p>Years of highest education:</p>
        <p></p>
        <label htmlFor="startStudy">First year: </label>

        <input
          type="number"
          name="startStudy"
          value={education.yearsStudy.startStudy}
          onChange={handleYears}
          min="1999"
          max={year}
          step="1"
          required
        />
        <p></p>
        <label htmlFor="endStudy">Final year: </label>

        <input
          type="number"
          name="endStudy"
          value={education.yearsStudy.endStudy}
          onChange={handleYears}
          min={education.yearsStudy.startStudy}
          max={year}
          step="1"
          required
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
