import React from 'react'
import PropTypes from 'prop-types';
import Button from '../Button';

const FeedbackOptions = ({ options, leaveFeedback }) => {
    return Object.keys(options).map(option => (
          <Button          
            key={option}
            type="button"
            onClick={() => leaveFeedback( option )}
          >
            {option}
          </Button>
        )
      );
};

FeedbackOptions.propTypes = {
  leaveFeedback: PropTypes.func.isRequired,
  options :  PropTypes.objectOf(PropTypes.number.isRequired)
};

export default FeedbackOptions;
