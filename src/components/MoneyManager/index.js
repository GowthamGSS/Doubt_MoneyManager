import {Component} from 'react'
import {v4 as uid} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    Balance: 0,
    Income: 0,
    Expenses: 0,
    Title: '',
    Amount: '',
    Type: 'Income',
    TransactionHistory: [],
  }

  submitClick = event => {
    event.preventDefault()
    const {Title, Amount, Type} = this.state
    const newTransaction = {
      id: uid(),
      title: Title,
      amount: Amount,
      type: Type,
    }
    if (Type === 'Income') {
      this.setState(prevState => ({
        Income: Number(prevState.Income) + Number(Amount),
      }))
    } else {
      this.setState(prevState => ({
        Expenses: Number(prevState.Expenses) + Number(Amount),
      }))
    }
    this.setState(prevState => ({
      TransactionHistory: [...prevState.TransactionHistory, newTransaction],
      Amount: '',
      Title: '',
    }))
  }

  changeTitle = event => {
    this.setState({Title: event.target.value})
  }

  changeAmount = event => {
    this.setState({Amount: event.target.value})
  }

  changeType = event => {
    this.setState({Type: event.target.value})
  }

  clickDelete = id => {
    const {TransactionHistory} = this.state
    const {amount, type} = TransactionHistory.filter(ele => ele.id !== id)

    this.setState(prevState => ({
      TransactionHistory: prevState.TransactionHistory.filter(
        ele => ele.id !== id,
      ),
    }))
  }

  render() {
    const {Income, Expenses, TransactionHistory, Title, Amount} = this.state
    console.log(TransactionHistory)
    return (
      <div className="appContainer">
        <div className="content-cont">
          <div className="header">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="moneyManageContainer">
            <MoneyDetails Inc={Income} Exp={Expenses} />
          </div>
          <div className="transactionContainer">
            <div className="form-container">
              <h1>Add Transaction</h1>
              <form>
                <label htmlFor="Title">Title</label>
                <input
                  type="text"
                  id="Title"
                  className="Title"
                  placeholder="Title"
                  onChange={this.changeTitle}
                  value={Title}
                />
                <label htmlFor="Amount">Amount</label>
                <input
                  type="number"
                  id="Amount"
                  className="Amount"
                  placeholder="Amount"
                  onChange={this.changeAmount}
                  value={Amount}
                />
                <label htmlFor="Type">Type</label>
                <select id="Type" onChange={this.changeType}>
                  {transactionTypeOptions.map(element => (
                    <option
                      key={element.optionId}
                      id={element.optionId}
                      value={element.optionId}
                    >
                      {element.displayText}
                    </option>
                  ))}
                </select>
                <button
                  className="button"
                  type="submit"
                  onClick={this.submitClick}
                >
                  Add
                </button>
              </form>
            </div>
            <div className="History-container">
              <h1>History</h1>
              <div className="HistoryBox">
                <div className="HeadingContainer">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </div>
                <ul className="HistoryList">
                  {TransactionHistory.map(element => (
                    <TransactionItem
                      key={element.id}
                      element={element}
                      clickDelete={this.clickDelete}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
