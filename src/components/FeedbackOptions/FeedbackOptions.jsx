import PropTypes from 'prop-types';

import css from '../../css/feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const { handleGoodIncrement, handleNeutralIncrement, handleBadIncrement } =
    options;
  const { good, neutral, bad } = onLeaveFeedback;
  return (
    <>
      <ul className={css.button__box}>
        <li className={css.feedback__item}>
          <button type="button" onClick={handleGoodIncrement}>
            {good}
          </button>
        </li>
        <li className={css.feedback__item}>
          <button type="button" onClick={handleNeutralIncrement}>
            {neutral}
          </button>
        </li>
        <li className={css.feedback__item}>
          <button type="button" onClick={handleBadIncrement}>
            {bad}
          </button>
        </li>
      </ul>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
