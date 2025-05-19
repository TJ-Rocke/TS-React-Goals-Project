import { type FormEvent } from "react";

function NewGoal() {
  // handler functions
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Your Goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label>Description</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
