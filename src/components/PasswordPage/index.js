import {v4} from 'uuid'
import {Component} from 'react'
import './index.css'
import PasswordStore from '../PasswordStore'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class PasswordPage extends Component {
  state = {
    websitesList: [],
    websiteNameInput: '',
    usernameInput: '',
    passwordInput: '',
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteNameInput: event.target.value})
  }

  onChangeUsernameInput = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePwdInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  deleteWebsiteFromList = websiteId => {
    const {websitesList} = this.state
    this.setState({
      websitesList: websitesList.filter(
        eachWebsite => eachWebsite.id !== websiteId,
      ),
    })
  }

  onAddWebsitePassword = event => {
    event.preventDefault()

    const {websiteNameInput, usernameInput, passwordInput} = this.state

    const profileContainerColorClassName = `profile-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newWebsite = {
      id: v4(),
      website: websiteNameInput,
      username: usernameInput,
      password: passwordInput,
      profileClassName: profileContainerColorClassName,
    }

    this.setState(prevState => ({
      websitesList: [...prevState.websitesList, newWebsite],
      websiteNameInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  render() {
    const {
      websitesList,
      websiteNameInput,
      usernameInput,
      passwordInput,
    } = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="tabs-container">
          <div className="upper-password-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
              alt="password manager"
              className="pwd-manager-sm"
            />
            <form
              className="password-form"
              onSubmit={this.onAddWebsitePassword}
            >
              <h1 className="add-pwd-heading">Add new Password</h1>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="logo"
                  alt="website"
                />
                <input
                  type="text"
                  className="input-style"
                  value={websiteNameInput}
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsiteInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="logo"
                  alt="username"
                />
                <input
                  type="text"
                  className="input-style"
                  value={usernameInput}
                  placeholder="Enter Username"
                  onChange={this.onChangeUsernameInput}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="logo"
                  alt="password"
                />
                <input
                  type="password"
                  className="input-style"
                  value={passwordInput}
                  placeholder="Enter Password"
                  onChange={this.onChangePwdInput}
                />
              </div>
              <button type="submit" className="btn-submit">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
              className="pwd-manager-lg"
            />
          </div>
          <div className="bottom-passwords-container">
            <PasswordStore
              websitesList={websitesList}
              deleteWebsiteFromList={this.deleteWebsiteFromList}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordPage
