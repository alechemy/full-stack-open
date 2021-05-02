const Statistic = ({ name, value, asPercent }) => {
  return (
    <p>
      {name}: {asPercent ? `${value}%` : value}
    </p>
  );
};

export default Statistic;
