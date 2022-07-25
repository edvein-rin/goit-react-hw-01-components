import PropTypes from 'prop-types';

import { generateRandomHexColor } from 'utils/generateRandomHexColor';

import styles from './styles.module.css';

export const Statistics = ({ title, stats }) => {
  const statsMap = stats.map(({ id, label, percentage }) => {
    const backgroundColor = generateRandomHexColor();

    return (
      <li
        key={id}
        className={styles.item}
        style={{
          backgroundColor,
        }}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    );
  });

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{statsMap}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
