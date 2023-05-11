import {useReducer} from 'react'


type Action = '減少' |  '増加' | '倍増' | '初期化'

const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case '減少':
      return currentCount  - 1
    case '増加':
      return currentCount  + 1
    case '倍増':
      return currentCount  * 2
    case '初期化':
      return 0
    default:
      return currentCount

  }
}


type CounterProps = {
  initialValue: number
}

const CounterReducer = (props: CounterProps) => {
  const { initialValue} = props
  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch('減少')}> - </button>
        <button onClick={() => dispatch('増加')}> + </button>
        <button onClick={() => dispatch('倍増')}> x2 </button>
        <button onClick={() => dispatch('初期化')}> 初期化 </button>
    </div>
  )
}

export default CounterReducer