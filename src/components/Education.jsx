function Education() {
  function submit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div>
      <p>EDUCATION</p>
      <form className="form-general" action={submit}>
        <p>School name:</p>
        <input type="text" />
        <p>Title of study:</p>
        <input type="text" />
        <p>Date of study:</p>
        <input type="text" />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Education;
