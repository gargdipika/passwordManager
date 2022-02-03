import './PasswordItem.css'

const PasswordItem = props => {
  const {passItem, isShow, deleteItem} = props
  const {website, username, password, id} = passItem

  const onClickDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-style">
      <div className="inn-container">
        <h1 className="short-name">{website[0].toUpperCase()}</h1>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          {isShow ? (
            <p>{password}</p>
          ) : (
            <img
              className="stars"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        testid="delete"
        className="delete"
        type="button"
        onClick={onClickDelete}
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
