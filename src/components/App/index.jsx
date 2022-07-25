import user from 'data/user.json';
import data from 'data/data.json';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';

import styles from './styles.module.css';

export const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className={styles.wrapper}>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className={styles.wrapper}>
        <Statistics stats={data} />
      </div>
    </div>
  );
};
