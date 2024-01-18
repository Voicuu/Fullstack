/* eslint-disable react/prop-types */
import { useState } from "react";

const Title = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const All = ({ good, neutral, bad }) => {
  return (
    <tr>
      <td>all</td>
      <td>{good + neutral + bad}</td>
    </tr>
  );
};

const Average = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const averageValue = (good - bad) / total;

  return (
    <tr>
      <td>average</td>
      <td>{isNaN(averageValue) ? 0 : averageValue}</td>
    </tr>
  );
};

const Positive = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  let positive = (good / total) * 100;

  return (
    <tr>
      <td>positive</td>
      <td>{isNaN(positive) ? 0 : positive}%</td>
    </tr>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <All good={good} neutral={neutral} bad={bad} />
          <Average good={good} neutral={neutral} bad={bad} />
          <Positive good={good} neutral={neutral} bad={bad} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <Title text="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <div>
        <Title text="statistics" />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default App;
