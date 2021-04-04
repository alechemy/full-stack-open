import Part from './Part';

const Content = (props) => {
  const { part1, part2, part3 } = props;

  return (
    <div>
      <Part title={part1.title} exerciseCount={part1.exercisesCount}></Part>
      <Part title={part2.title} exerciseCount={part2.exercisesCount}></Part>
      <Part title={part3.title} exerciseCount={part3.exercisesCount}></Part>
    </div>
  );
};

export default Content;
