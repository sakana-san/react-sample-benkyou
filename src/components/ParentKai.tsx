import React, {useState, useCallback} from 'react'


type BtnProps = {
  onClick: () => void
}
const GensyouB = (props: BtnProps) => {
  const {onClick} = props
  console.log(`gensyouBが再描画されました。`)
  return (
    <div>
      <button onClick={onClick}>減少</button>
    </div>
  )
}

const ZoukaB = React.memo((props: BtnProps) => {
  const {onClick} = props
  console.log(`zoukaBが再描画されました。`)

  return (
    <div>
      <button onClick={onClick}>増加</button>
    </div>
  )
})

const BaizouB = React.memo((props: BtnProps) => {
  const {onClick} = props
  console.log(`Baizouが再描画されました。`)

  return (
    <div>
      <button onClick={onClick}>倍増</button>
    </div>
  )
})

export const ParentKai = () => {
  const [count, setCount] = useState(0)
  const gensyou = () => {
    setCount((c) => c - 1)
  }
  const zouka = () => {
    setCount((c) => c + 1)
  }

  const baizou = useCallback(() => {
    setCount((c) => c * 2)
  }, [])


  return (
    <div>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <GensyouB onClick={gensyou} />
        <ZoukaB onClick={zouka} />
        <BaizouB onClick={baizou} />
      </p>
    </div>
  )
}