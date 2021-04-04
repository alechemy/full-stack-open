const Total = (props) => {
  let total = 0;
  const { exerciseCounts } = props;

  for (let count of exerciseCounts) {
    total += count;
  }

  return <p>Number of exercises {total}</p>;
};

export default Total;
