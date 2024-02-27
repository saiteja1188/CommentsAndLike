// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLike, deleteComment} = props
  const {id, name, comment, isLike, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const postDate = formatDistanceToNow(date)
  const isLikeClass = isLike ? 'like-button active' : 'like-button'
  const likeImgUrl = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    toggleIsLike(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }
  return (
    <li className="comment-item">
      <div className="list-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="name-time-container">
            <p className="name">{name}</p>
            <p className="time">{postDate} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="button-container">
        <div className="like-container">
          <img src={likeImgUrl} alt="like" className="like-img" />
          <button type="button" className={isLikeClass} onClick={onClickLike}>
            Like
          </button>
        </div>
        <div>
          <button
            onClick={onDelete}
            type="button"
            data-testid="delete"
            className="delete-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
