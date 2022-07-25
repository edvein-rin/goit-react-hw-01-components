import PropTypes from 'prop-types';

import styles from './styles.module.css';

export const TransactionHistory = ({ items }) => {
  const itemsMap = items.map(({ id, type, amount, currency }) => (
    <tr key={id} className={styles.row}>
      <td className={styles.cell}>{type}</td>
      <td className={styles.cell}>{amount}</td>
      <td className={styles.cell}>{currency}</td>
    </tr>
  ));

  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr className={styles.row}>
          <th className={styles.cell}>Type</th>
          <th className={styles.cell}>Amount</th>
          <th className={styles.cell}>Currency</th>
        </tr>
      </thead>
      <tbody>{itemsMap}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
