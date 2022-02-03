import './PasswordItem.css'

const PasswordItem = props => {
  const {passItem} = props
  const {website, username, password} = passItem

  return (
    <li className="list-style">
      <h1>{website[0].toUpperCase()}</h1>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
      />
    </li>
  )
}

export default PasswordItem
