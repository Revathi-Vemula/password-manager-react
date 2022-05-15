import './index.css'

const PasswordItem = props => {
  const {websiteDetails} = props
  const {id, website, username, password, profileClassName} = websiteDetails
  return (
    <li className="pwd-item-container">
      <p className={profileClassName}>{website.slice(0, 1).toUpperCase()}</p>
      <div className="website-details-container">
        <p className="website-name">{website}</p>
        <p className="website-name">{username}</p>
        <p className="pwd-style">*************</p>
      </div>
      <button type="button" className="btn-delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
