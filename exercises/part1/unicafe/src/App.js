import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Statistics from './Statistics';

const App = () => {
  // Storing all stats in a single object helps to ensure that the values are updated
  // properly. Otherwise, the co-dependent state vars (e.g. "good" and
  // "percentPositive") can be updated out of order. I'm deliberately avoiding
  // `useEffect` since it hasn't been introduced in the material yet.
  const [meta, setMeta] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    allFeedback: [],
    total: 0,
    average: 0,
    percentPositive: 0,
  });

  const recordFeedback = (value) => {
    let { good, neutral, bad } = meta;
    if (value === 1) {
      good += 1;
    } else if (value === 0) {
      neutral += 1;
    } else {
      bad += 1;
    }

    const allFeedback = meta.allFeedback.concat(value);
    const total = allFeedback.length;
    const sum = allFeedback.reduce((acc, val) => acc + val, 0);
    const average = sum / total;
    const percentPositive = (good / total) * 100;

    setMeta({
      good,
      neutral,
      bad,
      allFeedback,
      total,
      average,
      percentPositive,
    });
  };

  return (
    <>
      <Header text="Share Feedback"></Header>
      <Button handleClick={() => recordFeedback(1)} displayText="Good"></Button>
      <Button
        handleClick={() => recordFeedback(0)}
        displayText="Neutral"
      ></Button>
      <Button handleClick={() => recordFeedback(-1)} displayText="Bad"></Button>
      <Header text="Statistics"></Header>
      <Statistics meta={meta}></Statistics>
    </>
  );
};

export default App;
