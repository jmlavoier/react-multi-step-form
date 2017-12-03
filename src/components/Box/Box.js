import React, { PropTypes } from 'react';
import style from './Box.sass';

const Box = ({ header, footer, children }) => (
  <div className={style.box}>
    {header}
    <div className={style.content}>
      {children}
    </div>
    {footer}
  </div>
);

Box.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
  footer: PropTypes.node,
};

Box.defaultProps = {
  header: '',
  children: '',
  footer: '',
};

export default Box;
