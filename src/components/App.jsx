import { useState, useMemo } from 'react';

import Section from '../components/Section/Section';
import Statistics from '../components/Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodIncrement = event => {
    setGood(prevState => prevState + 1);
  };
  const handleNeutralIncrement = event => {
    setNeutral(prevState => prevState + 1);
  };
  const handleBadIncrement = event => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const countPositivePercentage = useMemo(() => {
    const goodFeedbackPercent = (good * 100) / countTotalFeedback;
    return Number(goodFeedbackPercent.toFixed());
  }, [good, countTotalFeedback]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{
            handleGoodIncrement,
            handleNeutralIncrement,
            handleBadIncrement,
          }}
          onLeaveFeedback={{
            good: 'Good',
            neutral: 'Neutral',
            bad: 'Bad',
          }}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositivePercentage}
        />
      </Section>
    </div>
  );
};

export default App;
