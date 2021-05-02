import Statistic from './Statistic';

const Statistics = ({ meta }) => {
  if (meta.allFeedback.length === 0) {
    return <p>No feedback given.</p>;
  }
  return (
    <div>
      <Statistic name="Good" value={meta.good}></Statistic>
      <Statistic name="Neutral" value={meta.neutral}></Statistic>
      <Statistic name="Bad" value={meta.bad}></Statistic>
      <Statistic name="Total" value={meta.total}></Statistic>
      <Statistic name="Average" value={meta.average}></Statistic>
      <Statistic
        name="Positive"
        value={meta.percentPositive}
        asPercent={true}
      ></Statistic>
    </div>
  );
};

export default Statistics;
