import React from 'react';

import Section from '../Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from '../Notification';

export class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = feedbackName => {
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };

  total = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positivePercentage = () =>
    this.state.good === 0
      ? 0
      : Math.ceil((this.state.good / this.total()) * 100);

  render() {
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} leaveFeedback={this.leaveFeedback} />
        </Section>

        {(this.total() === 0) 
        ? (<Section>
            <Notification message="There is no feedback"></Notification>{' '}
          </Section>)
        : ( <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.total()}
              positivePercentage={this.positivePercentage()}
            ></Statistics>
          </Section>
        )}
      </>
    );
  }
}

export default App;
