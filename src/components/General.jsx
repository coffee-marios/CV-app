import { useState } from "react";

function General() {
  // const fullName = { firstName: "M", lastName: "T" };

  const [general, setGeneral] = useState({
    firstName: "M",
    lastName: "T",
    age: 0,
    email: "m@yahoo.com",
    phone: "034-343-3434",
  });

  function submit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setGeneral((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <p>GENERAL INFORMATION</p>

      <form className="form-general" onSubmit={submit}>
        <p>First name: </p>
        <input
          type="text"
          name="firstName"
          value={general.firstName}
          onChange={handleChange}
        />
        <p>Last name:</p>
        <input
          type="text"
          name="lastName"
          value={general.lastName}
          onChange={handleChange}
        />
        <p>Age:</p>
        <input
          type="text"
          name="age"
          value={general.age}
          onChange={handleChange}
        />
        <p>e-mail:</p>
        <input
          type="text"
          name="email"
          value={general.email}
          onChange={handleChange}
        />
        <p>Phone number:</p>
        <input
          type="text"
          name="phone"
          value={general.phone}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Save</button>
      </form>
      <div className="info-general">
        <p>First name:&nbsp; {general.firstName}</p>
        <p>Last Name:&nbsp; {general.lastName}</p>
        <p>Age:&nbsp; {general.age} </p>
        <p>e-mail:&nbsp;{general.email}</p>
        <p>Phone: &nbsp;{general.phone}</p>
      </div>
    </div>
  );
}
export default General;
