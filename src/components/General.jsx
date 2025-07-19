import { useState } from "react";

function General() {
  const [editVisible, setVisible] = useState(true);
  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    age: 21,
    email: "",
    phone: "",
  });

  function submit(e) {
    e.preventDefault();
    setVisible(!editVisible);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setGeneral((prev) => ({ ...prev, [name]: value }));
  }

  function editGeneral() {
    setVisible(!editVisible);
  }

  return (
    <div>
      <p>GENERAL INFORMATION</p>

      <form
        className={editVisible ? "form-general" : "visible-general"}
        onSubmit={submit}
      >
        <p>First name: </p>
        <label htmlFor="firstName"></label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={general.firstName}
          onChange={handleChange}
        />
        <p>Last name:</p>
        <label htmlFor="lastName"></label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={general.lastName}
          onChange={handleChange}
        />
        <p>Age:</p>
        <label htmlFor="age"></label>
        <input
          type="number"
          id="age"
          name="age"
          step="1"
          min="21"
          max="60"
          value={general.age}
          onChange={handleChange}
        />
        <p>e-mail:</p>
        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          name="email"
          value={general.email}
          onChange={handleChange}
        />
        <p>Phone number:</p>
        <label htmlFor="phone"></label>

        <input
          type="text"
          id="phone"
          name="phone"
          value={general.phone}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Save</button>
      </form>
      <div
        className={
          editVisible ? "info-general visible-general" : "info-general"
        }
      >
        <p>
          First name:&nbsp; <span>{general.firstName}</span>
        </p>
        <p>
          Last Name:&nbsp; <span>{general.lastName}</span>
        </p>
        <p>
          Age:&nbsp;<span>{general.age}</span>{" "}
        </p>
        <p>
          e-mail:&nbsp;<span>{general.email}</span>
        </p>
        <p>
          Phone: &nbsp;<span>{general.phone}</span>
        </p>
        <button onClick={editGeneral}>Edit</button>
      </div>
    </div>
  );
}
export default General;
