// type CourseGoalProps = { // one way
//   title: string;
//   description: string;
// };
// another way
interface CourseGoalProps {
  title: string;
  description: string;
}

export default function ({ title, description }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
}
