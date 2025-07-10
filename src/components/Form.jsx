import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

export default function Form() {
  function submit(e) {
    console.log(e);
  }
  return (
    <form action={submit}>
      <General />
      <Education />
      <Experience />
    </form>
  );
}
