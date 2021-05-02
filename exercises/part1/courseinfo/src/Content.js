import Part from './Part';

const Content = ({ parts }) => {
  const [part1, part2, part3] = parts;

  return (
    <div>
      <Part title={part1.name} exerciseCount={part1.exercises}></Part>
      <Part title={part2.name} exerciseCount={part2.exercises}></Part>
      <Part title={part3.name} exerciseCount={part3.exercises}></Part>
    </div>
  );
};

export default Content;
