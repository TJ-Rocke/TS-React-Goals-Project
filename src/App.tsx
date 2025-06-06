import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

// types
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // function variables
  const [goals, setGoals] = useState<CourseGoal[]>([]); // useState is generic - type can be set in <>

  // function handlers
  function handleAddGoal(goal: string, description: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        description: description,
        id: Math.random(),
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  // returned TSX
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
