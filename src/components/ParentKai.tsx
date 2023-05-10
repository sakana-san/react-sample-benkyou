import React, {memo, useState} from 'react'


type FizzProps = {
  isFizz: boolean
}

//Fizzは通常の関数部品
// isFizzがtrueの場合Fizzと表示し、それ以外は何も表示しない
// isFizzの変化に関わらず、親が再描画されるとFizzも再描画される。
const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  return <span>{isFizz ?  `Fizzが再描画されました。 isFizz=${isFizz}` : ''}</span>
}

// type BuzzProps以降を編集
type BuzzProps = {
  isBuzz: boolean
  // propsにonClickを追加
  onClick: () => void
}


const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz,  onClick,  } = props
  return (
    <div>
      <span onClick={onClick}>{ isBuzz ? `Buzzが再描画されました。 isBuzz=${isBuzz}` : '' }</span>
    </div>
  )
})


//この形式でexportでしたときはimport {Parent} from ...で読み込む
export const ParentKai = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0
  const onBuzzClick = () => {
    console.log("クリックされた")
  }
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> +1</button>
      <button onClick={() => setCount((c) => c - 1)}> -1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <div>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
        <p>Parentが再描画されました。 count={count}</p>
      </div>
    </div>
  )
}