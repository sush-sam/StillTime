import React from 'react';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to StillTime</h1>
      <p>Your app for tracking meditation practice.</p>
    </div>
  );
};

export default Home;