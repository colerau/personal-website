import React, {useState} from 'react'

const Like = (props) => {

  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  const [ratio, setRatio] = useState(0)

  const handleLike = () => {
    setLike(like + 1)
  }

  const handleDislike = () => {
    setDislike(dislike + 1)
  }

  return (
    <div>
      <p>Likes: {like}</p>
      <p>Dislikes: {dislike}</p>
      <p>Like/Dislike Ratio: {like / dislike}</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>

    </div>
  )
}

export default Like
