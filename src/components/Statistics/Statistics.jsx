import PropTypes from 'prop-types';
import {
  StatisticsTotal,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePesnt }) => {
  return (
    <div>
      <StatisticsTotal>Total feedbacks: {total}</StatisticsTotal>
      <StatisticsList>
        <StatisticsItem>
          <p>Good:</p>
          <p>{good}</p>
        </StatisticsItem>
        <StatisticsItem>
          <p>Neutral:</p>
          <p>{neutral}</p>
        </StatisticsItem>
        <StatisticsItem>
          <p>Bad:</p>
          <p>{bad}</p>
        </StatisticsItem>
      </StatisticsList>
      {positivePesnt ? <h3>Positive Feedback: {positivePesnt}%</h3> : ''}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePesnt: PropTypes.number,
};

export default Statistics;
