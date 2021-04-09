import React from "react";

const course = "Half Stack application development";
const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;
const totalnumber = exercises1 + exercises2 + exercises3;

const Header = () => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part1 = () => {
  return (
    <div>
      <p>
        {part1} {exercises1}
      </p>
    </div>
  );
};
const Part2 = () => {
  return (
    <div>
      <p>
        {part2} {exercises2}
      </p>
    </div>
  );
};
const Part3 = () => {
  return (
    <div>
      <p>
        {part3} {exercises3}
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
};

const Total = () => {
  return (
    <div>
      <p>Number of exercises {totalnumber}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total totalnumber={totalnumber} />
    </div>
  );
};

export default App;
