import {Component} from 'react'

import PasswordItem from './Component/PasswordItem'

import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    isShow: false,
    passList: [],
    website: '',
    username: '',
    password: '',
  }

  onClickWebsite = event => {
    this.setState({website: event.target.value})
  }

  onClickUsername = event => {
    this.setState({username: event.target.value})
  }

  onClickPassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPass = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {passList} = this.state
    const id = passList.length + 1
    console.log(passList)
    const {website, username, password} = this.state
    const newPassItem = {id, website, username, password}

    this.setState(prevState => ({
      passList: [...prevState.passList, newPassItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangingSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    this.setState(prevState => ({
      passList: prevState.passList.filter(eachItem => eachItem.id !== id),
    }))
  }

  render() {
    const {
      passList,
      website,
      searchInput,
      username,
      password,
      isShow,
    } = this.state

    const lengthOfList = passList.length
    let filteredList = passList
    if (lengthOfList !== 0) {
      filteredList = passList.filter(eachPass =>
        eachPass.website.toLowerCase().includes(searchInput.toLowerCase()),
      )
    }
    console.log(filteredList)
    const isEmpty = filteredList.length === 0

    return (
      <div className="background-container">
        <div className="inner-container">
          <img
            className="app-logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
          />
          <div className="first-card">
            <form className="form-card1" onSubmit={this.onSubmitForm}>
              <h1>Add New Password</h1>
              <div className="input-container">
                <img
                  className="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <hr className="horizontal-line" />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.onClickWebsite}
                />
              </div>
              <div className="input-container">
                <img
                  className="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <hr className="horizontal-line" />
                <input
                  type="text"
                  className="input"
                  placeholder="Enter Username"
                  onChange={this.onClickUsername}
                  value={username}
                />
              </div>
              <div className="input-container">
                <img
                  className="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <hr className="horizontal-line" />
                <input
                  type="password"
                  className="input"
                  placeholder="Enter Password"
                  onChange={this.onClickPassword}
                  value={password}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
            <img
              className="password-manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
          <div className="second-card">
            <div className="nav-container">
              <div className="pass-container">
                <h3>Your Passwords</h3>
                <p className="number-style" type="button">
                  {lengthOfList}
                </p>
              </div>
              <div className="input-container special-nav">
                <img
                  className="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <hr className="horizontal-line" />
                <input
                  onChange={this.onChangingSearch}
                  className="input"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
            <hr />
            <div className="show-password-container">
              <input
                type="checkbox"
                onClick={this.onClickShowPass}
                id="checkbox"
                className="check-box"
              />
              <label htmlFor="checkbox">Show passwords</label>
            </div>
            {isEmpty ? (
              <div className="bottom-container">
                <img
                  className="no-password-image"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p>No Passwords</p>
              </div>
            ) : (
              <ul className="list-password">
                {filteredList.map(eachPass => (
                  <PasswordItem
                    deleteItem={this.deleteItem}
                    isShow={isShow}
                    passItem={eachPass}
                    key={eachPass.id}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App
