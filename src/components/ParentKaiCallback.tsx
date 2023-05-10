import React, {useState, useCallback} from 'react'

type ButtonProps = {
  onClick: () => void
}

// DecrementButtonは通常の関数部品でボタン表示する
const DecrementButton = (props: ButtonProps) => {
  const {onClick} = props
  console.log("Decrement再描画されました。")
  return (
    <div>
      <button onClick={onClick}>Decrement</button>
    </div>
  )
}

// IncrementButtonは
const IncrementButton = React.memo((props: ButtonProps) => {
  const {onClick} = props
  console.log("Increment再描画されました。")
  return (
    <div>
      <button onClick={onClick}>Increment</button>
    </div>
  )
})

// DoubleButtonはメモ化した関数部品でボタン表示する
const DoubleButton = React.memo((props: ButtonProps) => {
  const {onClick} = props
  console.log("Double再描画されました。")
  return (
    <div>
      <button onClick={onClick}>Double</button>
    </div>
  )
})


export const ParentKaiCallback = () => {
  const [count, setCount] = useState(0)
  const decrement = () => {
    setCount((c) => c - 1)
  }
  const increment = () => {
    setCount((c) => c + 1)
  }
  //useCallbackを使って関数をメモ化する
  const double = useCallback(() => {
    setCount((c) => c * 2)
  }, [])

  return(
    <div>
      <p>count: {count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  )
}