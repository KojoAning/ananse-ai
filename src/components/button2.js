import React from 'react';

import styles from '../components/button2.module.css'
const Button2 = (props) => {
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

export default Button2;