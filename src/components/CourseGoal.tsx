import { FC, type PropsWithChildren, type ReactNode } from "react"; // using type keyword makes it clear to the build tool that the import can be removed from the code that will later run in the browser because the browser wont be able to deal with 'types' anyways (ReactNode is a type, not an object or method etc)

// one way of creating props object
// interface CourseGoalProps {
//   title: string;
//   description: string;
//   children: ReactNode; // anything that is "renderable" is a 'ReactNode (like an HTML element or JSX)
// }
// ---------
// another way // props with children is a type that allows you to add props on top of accepting children props
type CourseGoalProps = PropsWithChildren<{
  title: string;
  description: string;
}>;

export default function ({ title, description, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}

// ANOTHER WAY OF TYPING COMPONENTS
// FC means Functional Component
// const CourseGoal: FC<CourseGoalProps> = ({ title, description, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
