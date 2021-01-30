import React, {useState} from 'react'

const Like = (props) => {

  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)

  return (
    <div>
      <p>Likes: {like}</p>
      <p>Dislikes: {dislike}</p>
      <button onClick={() => setLike(like + 1)}>Like</button>
      <button onClick={() => setDislike(dislike + 1)}>Dislike</button>
    </div>
  )
}

export default Like
