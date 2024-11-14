import { memo } from 'react';
import styles from '../../styles/contactStyles/GradientBackground.module.css';

export const GradientBackground = memo(() => (
  <div className={styles.container}>
    <div className={styles.gradientBlue}></div>
    <div className={styles.gradientPurple}></div>
  </div>
));

GradientBackground.displayName = 'GradientBackground';