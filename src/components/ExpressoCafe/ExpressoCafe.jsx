import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';

export default class ExpressoCafe extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  onClickIncrement=(event)=>{
    const {name}=event.target;
    this.setState((prev)=>{
      return {[name]: prev[name] + 1};
    })
  };


  countTotalFeedback(){
    const sum = Object.values(this.state).reduce(((prev, number)=> prev + number));
    return sum;
  };
 

  countPositiveFeedbackPercentage=()=>{
    const result = Number((this.state.good *100)/this.countTotalFeedback());
    return result;
  };

  render() {
    const {good, neutral, bad} = this.state;

    const sum = this.countTotalFeedback();
    const positive = (this.countPositiveFeedbackPercentage()).toFixed(0);


    return (
      <div>

          <Section title="Please leave feedback">
            <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={this.onClickIncrement}/>
          </Section>

       
          <Section title="Statistics">
            <Statistics good={good} neutral={neutral} bad={bad} total={sum} positivePercentage={positive}/>
          </Section>
      </div>
    )
  }
}
