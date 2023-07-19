import PropTypes from 'prop-types';
import Button from '../Button';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <Button
            key={option}
            type="button"
            onClick={() => leaveFeedback( option )}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
  options :  PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
};

export default FeedbackOptions;
