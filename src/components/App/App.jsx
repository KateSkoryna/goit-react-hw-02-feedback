import React from 'react';
import { Section } from '../Section';
import { FeedbackOptions } from '../FeedbackOptions';
import { Statistics } from '../Statistics';
import { Notification } from '../Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback) * 100;
  };

  clickOnBtnFeedback = event => {
    const target = event.target.name;
    this.setState();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btnArr = ['Good', 'Neutral', 'Bad'];
    return (
      <div>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={btnArr}
            onLeaveFeedback={this.clickOnBtnFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
