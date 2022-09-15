import PropTypes from 'prop-types';
import {
  FeedbackOptionsBox,
  FeedbackOptionsItem,
  FeedbackOptionsBtn,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsBox>
      {options.map((option, index) => (
        <FeedbackOptionsItem key={index}>
          <FeedbackOptionsBtn
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </FeedbackOptionsBtn>
        </FeedbackOptionsItem>
      ))}
    </FeedbackOptionsBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
