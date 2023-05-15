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


// const IroiroTamesu = () => {
//   const [liked, setLiked] = useState(false)
//   const onClick = () => {
//       setLiked(!liked)
//   }
//   return (
//     <div>
//       <button onClick={onClick}>{liked ? 'いいね済' : 'いいね未'}</button>
//     </div>
//   )
// }

// -------------------------------------------------------


// 入力後即表示 -------------------------------------------------------


// const IroiroTamesu = () => {
//   const [text, setText] = useState('')
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value)
//   }
//   return (
//     <div>
//       <input type="text" onChange={onChange} />
//       <p>{text}</p>
//     </div>
//   )
// }

// -------------------------------------------------------


// 計測数字 -------------------------------------------------------


// const IroiroTamesu = () => {
//   const InitalNum = 0
//   const [count, setCount] = useState(InitalNum)
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>増加</button>
//       <button onClick={() => setCount(count - 1)}>減少</button>
//       <button onClick={() => setCount(0)}>初期化</button>
//       <p>勘定: {count}</p>
//     </div>
//   )
// }

// -------------------------------------------------------

// 腕立て計測 -------------------------------------------------------

// type CS = {
//   kanjyou: number,
//   name: string
// }
// const Counter = (props: CS) => {
//   const {kanjyou, name} = props
//   const [count, setCount] = useState(kanjyou)
//   return (
//     <div>
//       <p>
//         <span>{count}</span>
//         <span>{name}</span>
//       </p>
//       <button onClick={() => setCount(count + 1)}>増加</button>
//       <button onClick={() => setCount(count - 1)}>減少</button>
//       <button onClick={() => setCount(0)}>初期化</button>
//     </div>
//   )
// }

// const IroiroTamesu = () => {
//   return (
//     <div>
//       <Counter name="腕立て" kanjyou={0} />
//       <Counter name="腹筋" kanjyou={0} />
//       <Counter name="スクワット" kanjyou={0} />
//     </div>
//   )
// }

// -------------------------------------------------------


// ログインチェック -------------------------------------------------------


// type status = {
//   flg: boolean
// }

// const LoginCheckBtn = (props: status) => {
//   const {flg} = props
//   const [check, setCheck] = useState(flg)
//   if (check) {
//     return (
//       <button onClick={() => setCheck(!check)}>ログイン</button>
//     )
//   } else {
//     return (
//       <button onClick={() => setCheck(!check)}>ログアウト</button>
//     )
//   }
// }
// const IroiroTamesu = () => {
//   return (
//     <LoginCheckBtn flg={false} />
//   )
// }

// -------------------------------------------------------


// 入力状態 -------------------------------------------------------

// type IS = {
//   text: string
// }
// const InputStatus = (props: IS) => {
//   const {text} = props
//   const [getText, setText] = useState(text)
//   const [inputText, setInputText] = useState('')
//   return (
//     <div>
//       <h1>私は{getText}が得意です。</h1>
//       <input type="text" value={inputText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
//         setInputText(e.target.value)
//       }} />
//       <input type="button" value="入力" onClick={() => {
//         setText(inputText)
//         setInputText('')
//       }} />
//     </div>
//   )
// }

// const IroiroTamesu = () => {
//   return (
//     <div>
//       <InputStatus text={'javascript'} />
//     </div>
//   )
// }





// -------------------------------------------------------



// セレクトボックス -------------------------------------------------------
// const values = [
//   {id: 1, item: 'HTML'},
//   {id: 2, item: 'CSS'},
//   {id: 3, item: 'javascritpt'},
// ]


// const OptionItems = values.map((value) => {
//   return (
//     <option value={value.item} key={value.id}>
//       {value.item}
//     </option>
//   )
// })


// const InputStatus = () => {
//   const [seValue, setSeValue] = useState(values[0]['item'])
  
//   const onChange = (e: { target: { value: string } }) => {
//     setSeValue(e.target.value)
//   }
//   return (
//     <div>
//       <p>現在選択されている言語: <span>{seValue}</span></p>
//       <select value={seValue} onChange={onChange}>
//         {OptionItems}
//       </select>
//     </div>
//   )
// }

// const IroiroTamesu = () => {
//   return (
//     <div>
//       <InputStatus />
//     </div>
//   )
// }

// -------------------------------------------------------


// チェックボックス -------------------------------------------------------

const values = [
  {id: 1, item: 'HTML'},
  {id: 2, item: 'CSS'},
  {id: 3, item: 'javascritpt'},
]
type CHP = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: string[]
}
const CheckedItems = (props: CHP) => {
  const {onChange, checked} = props
  return (
    <div>
      {values.map((value) => (
          <label key={value.id}>
          <input
            type="checkbox"
            value={value.item}
            onChange={onChange}
            checked={checked.includes(value.item)}
          />
          {value.item}
        </label>
      ))}
    </div>
  )
}

const InputStatus = () => {
  const [checkedValues, setCheckedValues] = useState<string[]>([])
  const onChange = (e: { target: { value: string } }) => {
    if (checkedValues.includes(e.target.value)) {
      setCheckedValues(
        checkedValues.filter((cv) => {
          console.log(cv)
          return cv !== e.target.value
        })
      )
    } else {
      setCheckedValues([...checkedValues, e.target.value])
    }
  }
  return (
    <div>
      <p>現在設定されている値:{checkedValues}</p>
      <CheckedItems onChange={onChange} checked={checkedValues} />
    </div>
  )
}

const IroiroTamesu = () => {
  return (
    <div>
      <InputStatus />
    </div>
  )
}


// -------------------------------------------------------
export default IroiroTamesu

  