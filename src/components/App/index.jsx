import user from 'data/user.json';
import { Profile } from 'components/Profile';

import styles from './styles.module.css';

export const App = () => {
  return (
    <div className={styles.root}>
      <section className={styles.profileSection}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
    </div>
  );
};
