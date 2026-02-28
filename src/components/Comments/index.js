import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    list: [],
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  submit = event => {
    event.preventDefault()
    console.log('vhgvhv')
    const {name, comment} = this.state
    if (name.trim() === '' || comment.trim() === '') {
      return
    }
    const randomIndex =
      Math.ceil(Math.random() * initialContainerBackgroundClassNames.length) - 1

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isFavorite: false,
      date: new Date(),
      initalList: initialContainerBackgroundClassNames[randomIndex],
    }

    this.setState(prevState => ({
      list: [...prevState.list, newComment],
      name: '',
      comment: '',
    }))
  }

  L = id => {
    this.setState(prevState => ({
      list: prevState.list.map(each =>
        each.id === id ? {...each, isFavorite: !each.isFavorite} : each,
      ),
    }))
  }

  d = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(each => each.id !== id),
    }))
  }

  render() {
    const {name, comment, list} = this.state

    return (
      <div className="div1">
        <form onSubmit={this.submit} className="div3">
          <div className="div2">
            <h1 className="h1">Comments</h1>
            <p>Say something </p>
            <input
              className="input"
              value={name}
              onChange={this.onChangeName}
              placeholder="Your Name"
            />
            <textarea
              className="input2"
              value={comment}
              onChange={this.onChangeComment}
              placeholder="Your Comment"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            className="logo1"
            alt="Comments"
          />
        </form>

        <ul className="ul">
          <div className="pppp">
            <p className="p">
              <span className="span">{list.length}</span> Comments
            </p>
          </div>
          {list.map(each => (
            <CommentItem
              key={each.id}
              pro={each}
              onLike={this.L}
              ondelete={this.d}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
