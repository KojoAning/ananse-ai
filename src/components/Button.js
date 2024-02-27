import React from 'react';

import styles from '../components/Button.module.css'
const Button = (props) => {
  const { children, ...rest } = props;

  return (
    <button
      {...rest}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
