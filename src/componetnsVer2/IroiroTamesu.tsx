import React, { useState } from 'react'
// const Youkoso = () => {
//   const onClick = () => {
//     alert('ようこそ')
//   }
//   const text = '押下してくください'
//   return (
//     <div>
//       <p>{ text }</p>
//       <button onClick={onClick}>押下</button>
//     </div>
//   )
// }

// type TextProps = {
//   textContent: string
// }
// const Youkoso = (props: TextProps) => {
//   const { textContent } = props
//   const [text, setText] = useState(textContent)
//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//           const str = e.target.value
//           setText(str)
//         }}
//       />
//       <p>{text}</p>
//     </div>
//   )
// }


// type TextProps = {
//   textContent: string
// }

// const TextHoge = (props: {content: string}) => {
//   const {content} = props
//   return <p>{content}</p>
// }
// const Youkoso = (props: TextProps) => {
//   const { textContent } = props
//   const [text, setText] = useState(textContent)
//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//           const str = e.target.value
//           setText(str)
//         }}
//       />
//       <TextHoge content={text} />
//     </div>
//   )
// }


// const Youkoso = () => {
//   const [text, setText] = useState('')
  
//   const onClick = () => {
//     setText('ようこそ')
//   }
//   return (
//     <div>
//       <p>{text}</p>
//       <button onClick={onClick}>押下する</button>
//     </div>
//   )
// }

// いいねボタン -------------------------------------------------------


const IroiroTamesu = () => {
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

// -------------------------------------------------------

export default IroiroTamesu

  