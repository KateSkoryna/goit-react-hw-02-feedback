import React, { Component } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';

class App extends Component {
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
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  clickOnBtnFeedback = event => {
    const target = event.currentTarget.name;
    this.setState(prev => ({ [target]: prev[target] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const btnArr = ['good', 'neutral', 'bad'];
    return (
      <div>
        <Section title="Please,leave feedback">
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
              total={this.countTotalFeedback()}
              positivePesnt={this.countPositiveFeedbackPercentage()}
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
