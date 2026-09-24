import cn from 'classnames';

import React from 'react';

// BEGIN (write your solution here)

const Alert = ({ type, text }) => (
  <div className={cn('alert', `alert-${type}`)} role="alert">
    {text}
  </div>
);

export default Alert;

// END