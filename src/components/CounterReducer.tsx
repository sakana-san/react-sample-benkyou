// useReducer
// 第一引数にreducer関数を渡す。
// 第二引数に初期値を渡す。
// useStateでは更新関数に次の状態を渡していましたが、
// useReducerでは更新関数（dispatch）にactionと呼ばれるデータを渡します。
// 現在の状態とactionを渡すと次の状態を返すreducerという関数を用います。
import {useReducer} from 'react'

// reducerが受け取るactionの型を定義する
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// 現在の状態をactionに基づいて次の状態を返します
const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return currentCount + 1
    case 'DECREMENT':
      return currentCount - 1
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default:
      return currentCount
  }
}

type CounterProps = {
  initialValue: number
}

// useState
// userState()の戻り値は配列。1番目に現在の状態を保持する変数、
// 2番目に更新関数が入っている。
const Counter = (props: CounterProps) => {
  const {initialValue} = props
  // count 現在の状態、　setCount　更新
  const [count, dispatch] = useReducer(reducer, initialValue)
  return (
    <div>
      <p>Count: {count}</p>
      {/* dispatch関数にactionを渡して、状態を更新します */}
      <button onClick={() => dispatch('DECREMENT')}> - </button>
      <button onClick={() => dispatch('INCREMENT')}> + </button>
      <button onClick={() => dispatch('DOUBLE')}> x2 </button>
      <button onClick={() => dispatch('RESET')}> Reset </button>
    </div>
  )
}

export default Counter