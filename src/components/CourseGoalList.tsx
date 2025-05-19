import { CourseGoal as CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";

/**
 * Lists out each individual course goal
 * @function
 * @param {array} - List of all goals
 * @return {tsx}
 */

// types
type CourseGoalListProps = {
  goals: CourseGoalType[]; // this tells TS that its is an array of objects
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal?.id}>
          <CourseGoal
            id={goal.id}
            title={goal?.title}
            description={goal?.description}
            onDelete={onDeleteGoal}
          >
            <p>⚛️</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGoalList;
