import React from 'react';
import styles from './PageNotFound.module.css'; // Import the CSS file for styling

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 Not Found</h1>
      <p className={styles.message}>
        The page you are looking for does not exist.{' '}
        <span role="img" aria-label="Crying Face">
          😢
        </span>
      </p>
    </div>
  );
};

export default PageNotFound;
