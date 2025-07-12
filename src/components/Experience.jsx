function Experience() {
  function submit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div>
      <p>EXPERIENCE</p>

      <form className="form-general" action={submit}>
        <p>Company name:</p>
        <input type="text" />
        <p>Position title:</p>
        <input type="text" />
        <p>Main responsibilities of your job:</p>
        <textarea name="" id=""></textarea>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Experience;
