import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordStore extends Component {
  state = {searchInput: '', isShowPasswordChecked: false}

  onClickDeleteWebsite = id => {
    const {deleteWebsiteFromList} = this.props
    deleteWebsiteFromList(id)
  }

  renderEmptyView = () => (
    <div className="empty-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        className="no-password-img"
        alt="no passwords"
      />
      <p className="your-pwd-heading">No Passwords</p>
    </div>
  )

  renderSearchList = searchResultsList => {
    const {isShowPasswordChecked} = this.state
    return (
      <ul className="websites-list-container">
        {searchResultsList.map(eachWebsite => (
          <PasswordItem
            websiteDetails={eachWebsite}
            key={eachWebsite.id}
            isShowPasswordChecked={isShowPasswordChecked}
            onClickDelete={this.onClickDeleteWebsite}
          />
        ))}
      </ul>
    )
  }

  getSearchResults = () => {
    const {searchInput} = this.state
    const {websitesList} = this.props

    const searchResultsList = websitesList.filter(eachWebsite =>
      eachWebsite.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return searchResultsList
  }

  onChangeShowPassWord = event => {
    this.setState({
      isShowPasswordChecked: event.target.checked,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const searchResultsList = this.getSearchResults()
    return (
      <div className="bottom-store">
        <div className="header">
          <div className="pwd-count-container">
            <h1 className="your-pwd-heading">Your Passwords</h1>
            <p className="pwd-count">{searchResultsList.length}</p>
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="logo"
            />
            <input
              type="search"
              placeholder="Search"
              className="search-style"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <hr className="separator" />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="showPassword"
            className="checkbox-show-pwd"
            onChange={this.onChangeShowPassWord}
          />
          <label htmlFor="showPassword" className="label-show-pwd">
            Show Passwords
          </label>
        </div>
        {searchResultsList.length === 0
          ? this.renderEmptyView()
          : this.renderSearchList(searchResultsList)}
      </div>
    )
  }
}

export default PasswordStore
