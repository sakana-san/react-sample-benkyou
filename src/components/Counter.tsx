// useState
// userState()の戻り値は配列。1番目に現在の状態を保持する変数、
// 2番目に更新関数が入っている。
import {useState} from 'react'

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const {initialValue} = props
  // count 現在の状態、　setCount　更新
  const [count, setCount] = useState(initialValue)
  return (
    <div>
      <p>Count: {count}</p>
      {/* setCountを呼ぶことで状態を更新　*/}
      <button onClick={() => 
        setCount(count - 1)
      }> - </button>
      <button onClick={() =>
        setCount((prevCount) =>
        prevCount + 1)
      }> + </button>
    </div>
  )
}

export default Counter