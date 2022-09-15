import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePesnt }) => {
  return (
    <ul>
      <li>
        <h3>Good: {good}</h3>
      </li>
      <li>
        <h3>Neutral: {neutral}</h3>
      </li>
      <li>
        <h3>Bad: {bad}</h3>
      </li>
      <li>
        <h3>Total: {total}</h3>
      </li>
      <li>
        {positivePesnt ? <h3>Positive Feedback: {positivePesnt}%</h3> : ''}
      </li>
    </ul>
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
