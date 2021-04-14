import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
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

const app = {
  course: "Half Stack application development",
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

const App = () => {
  return (
    <div>
      <Header course={app.course} />
      <Content part1={app.part1} part2={app.part2} part3={app.part3} />
    </div>
  );
};
export default App;
