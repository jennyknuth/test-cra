import React from 'react';
/* eslint-disable import/no-absolute-path */

import logo from './logo.svg';
import styles from './App.scss';

const App = () => {
  console.log(logo);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt={logo} />
      </header>
      <h1 className={styles.title}>This could be a title component</h1>
      <hr />
      <p className={styles.intro}>
        To get started, add components to <code>src/App/App.jsx</code> and save to reload.
      </p>
    </div>
  );
};

export default App;
