const MoneyDetails = props => {
  const {Inc, Exp} = props

  return (
    <ul>
      <li className="BalanceContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="logo"
          alt="balance"
        />
        <div className="content">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {Inc - Exp}</p>
        </div>
      </li>
      <li className="IncomeContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="logo"
          alt="income"
        />
        <div className="content">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {Inc}</p>
        </div>
      </li>
      <li className="ExpensesContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="logo"
          alt="expenses"
        />
        <div className="content">
          <p>Your expenses</p>
          <p data-testid="expensesAmount">Rs {Exp}</p>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
