const TransactionItem = props => {
  const {element, clickDelete} = props
  const {id, title, amount, type} = element

  const deleteClick = () => {
    clickDelete(id)
  }
  return (
    <li>
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <button type="button" onClick={deleteClick} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
