import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {pro, onLike, ondelete} = props
  const {id, name, comment, isFavorite, initalList, date} = pro
  const k = isFavorite ? 'active' : 'non'
  const checkisf = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const initial = name ? name[0].toUpperCase() : ''

  const d = formatDistanceToNow(date)

  const Like = () => {
    onLike(id)
  }

  const deletea = () => {
    ondelete(id)
  }

  return (
    <li className="li">
      <div className="d2">
        <div className={`h ${initalList}`}>
          <p className="ini">{initial}</p>
        </div>
        <div>
          <div className="ddd">
            <h1 className="hh">{name}</h1>
            <p className="date">{d}</p>
          </div>
          <p className="pp">{comment}</p>
        </div>
      </div>
      <div className="divl">
        <div>
          <img src={checkisf} className="like" alt="like" />
          <button onClick={Like} className={` ${k}`}>
            like
          </button>
        </div>
        <button
          data-testid="delete"
          className="button1"
          type="button"
          onClick={deletea}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
