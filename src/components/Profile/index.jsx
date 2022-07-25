import PropTypes from 'prop-types';

import styles from './styles.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsMap = Object.entries(stats).map(([label, quantity]) => {
    const formattedQuantity = quantity.toLocaleString();

    return (
      <li className={styles.stat} key={label}>
        <span className={styles.statLabel}>{label}</span>
        <span className={styles.statQuantity}>{formattedQuantity}</span>
      </li>
    );
  });

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
          width={128}
          height={128}
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>{statsMap}</ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
