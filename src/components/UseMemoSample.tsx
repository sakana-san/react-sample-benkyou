import React, {useState, useMemo} from 'react'

export const UseMemoSample = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])
  
  
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }


  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text]
    })
    setText('')
  }
  const n1 = items.reduce((sub, item) => sub + item.length, 0)
  const n2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0)
  }, [])

  return (
    <div>
      <p>usermemosample</p>
     <div>
        <input
          value={text}
          onChange={onChangeInput}
        />
        <button onClick={onClickButton}>追加</button>
     </div>
     <div>
      {
        items.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      }
     </div>
     <div>
      <p>n1: {n1}</p>
      <p>n2: {n2}</p>
     </div>
    </div>
  )
}