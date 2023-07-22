import { useState } from 'react';

import Section from '../Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from '../Notification';

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  function leaveFeedback(options)  {
    switch (options) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default: ;
    }
  };

  function totalCount() {
    const total = Object.values(options).reduce((acc, option) => {
      return acc + option;
    }, 0);
    return total;
  }

  function positivePercentage() {
    return (good === 0)
      ? 0
      : Math.ceil((good / totalCount()) * 100);
  }

  return (
    
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} leaveFeedback={leaveFeedback} />
        </Section>

        {(totalCount(options) === 0)
          ? (<Section>
            <Notification message="There is no feedback"></Notification>{' '}
          </Section>)
          : (<Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalCount(options)}
              positivePercentage={positivePercentage(options)}
            ></Statistics>
          </Section>
          )}
      </>
    );
}

