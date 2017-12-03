import React, { PropTypes } from 'react';

import style from './ProgressBar.sass';

const ProgressBar = ({ duration }) => (
  <div className={style['progress-bar']}>
    {duration ? <span style={{ animationDuration: duration }} /> : <span />}
  </div>
);

ProgressBar.propTypes = {
  duration: PropTypes.string,
};

ProgressBar.defaultProps = {
  duration: '',
};

export default ProgressBar;
