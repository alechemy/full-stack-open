import React from 'react';

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((a, c) => (a += c.exercises), 0);
  return <p>Number of exercises {sum}</p>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return course.parts.map(({ id, name, exercises }) => (
    <Part key={id} name={name} exercises={exercises} />
  ));
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </>
  );
};

export default Course;
