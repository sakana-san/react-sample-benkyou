import React, {useState} from 'react';



const LikeBtn = () => {
  const [liked, setLiked] = useState(false)
  const onClick = () => {
      setLiked(!liked)
  }
  return (
    <div>
      <button onClick={onClick}>{liked ? 'いいね済' : 'いいね未'}</button>
    </div>
  )
}

export default LikeBtn