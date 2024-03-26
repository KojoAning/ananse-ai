import React from 'react';

import styles from '../components/button1.module.css'
const Button1 = (props) => {
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

export default Button1;