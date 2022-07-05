import { Component } from 'react';
import Section from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback"></Section>
      </>
    );
  }
}
