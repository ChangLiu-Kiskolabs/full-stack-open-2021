import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part parts={props.part1} />
      <Part parts={props.part2} />
      <Part parts={props.part3} />
    </div>
  );
};
const Total = (props) => {
  return (
    <div>
      Total number{" "}
      {props.part1.exercises + props.part2.exercises + props.part3.exercises}
    </div>
  );
};
const App = () => {
  const course = {
    title: "Half Stack application development",
    part1: {
      name: "Fundamentals of React",
      exercises: 10,
    },
    part2: {
      name: "Using props to pass data",
      exercises: 7,
    },
    part3: {
      name: "State of a component",
      exercises: 14,
    },
  };

  return (
    <div>
      <Header title={course.title} />
      <Content part1={course.part1} part2={course.part2} part3={course.part3} />
      <Total part1={course.part1} part2={course.part2} part3={course.part3} />
    </div>
  );
};
export default App;
