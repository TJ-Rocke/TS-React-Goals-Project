import { useRef, type FormEvent } from "react";

function NewGoal() {
  // using useRef to extract values
  const goal = useRef<HTMLInputElement>(null); // * default starting value is 'undefined', P.S. 'undefined' is not having a value at all
  const description = useRef<HTMLInputElement>(null); // * 'null' is not having a value "yet"
  // handler functions
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value; // * '!' tells ts the value will NEVER be null. Be careful because this can crash an app! CAN still use a '?' as shown below
    const enteredSummary = description.current?.value;
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label>Description</label>
        <input id="summary" type="text" ref={description} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
