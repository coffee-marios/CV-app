import { useState } from "react";

function General() {
  const fullName = { firstName: "", lastName: "" };

  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  function submit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <p>GENERAL INFORMATION</p>

      <form className="form-general" action={submit}>
        <p>First name:</p>
        <input type="text" />
        <p>Last name:</p>
        <input type="text" />
        <p>Age:</p>
        <input type="text" />
        <p>e-mail:</p>
        <input type="text" />
        <p>Phone number:</p>
        <input type="text" />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
export default General;
