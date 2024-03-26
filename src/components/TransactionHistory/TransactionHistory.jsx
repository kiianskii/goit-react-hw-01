import s from "./TransactionHistory.module.css"


const TransactionHistory = ({ items }) => {
    return (<table className={s.table}>
  <thead className={s.headline}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody>
            {items.map((transaction) => {
                return (<tr className={s.rowline} key={transaction.id}>
                <td className={s.row}>{transaction.type}</td>
                <td className={s.row}>{transaction.amount}</td>
                <td className={s.row}>{transaction.currency}</td>
                </tr>)
            })}
  </tbody>
</table>)
};

export default TransactionHistory