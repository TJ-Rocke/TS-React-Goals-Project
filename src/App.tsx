import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";

// types
type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // function variables
  const [goals, setGoals] = useState<CourseGoal[]>([]); // useState is generic - type can be set in <>
  // function handlers
  function handleAddGoal() {
    setGoals();
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal
        title="Learn React + TS"
        description="Learn it from the ground up"
      >
        <p>Or Top Down ⚛️</p>
      </CourseGoal>
    </main>
  );
}
