import './index.css'

const PasswordItem = props => {
  const {websiteDetails, isShowPasswordChecked, onClickDelete} = props
  const {id, website, username, password, profileClassName} = websiteDetails

  const deleteWebsite = () => {
    onClickDelete(id)
  }

  return (
    <li className="pwd-item-container">
      <p className={profileClassName}>{website.slice(0, 1).toUpperCase()}</p>
      <div className="website-details-container">
        <p className="website-name">{website}</p>
        <p className="website-name">{username}</p>
        {isShowPasswordChecked ? (
          <p className="pwd-style">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            className="pwd-image-style"
            alt="stars"
          />
        )}
      </div>
      <button
        type="button"
        className="btn-delete"
        testid="delete"
        onClick={deleteWebsite}
      >
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
