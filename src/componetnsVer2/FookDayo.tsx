import React, { useState, useEffect } from 'react'


// type CountProps = {
//   count: number
// }

// const FookDayo = (props: CountProps) => {
//   const {count} = props
//   const [getC, setC] = useState(count)
//   const cBF = () => {
//     document.title = `${getC}回クリックされました。`
//   }
//   useEffect(cBF, [getC])
//  return (
//   <div>
//     <p>現在のカウント数: {getC}</p>
//     <div>
//       <button onClick={() => {setC((pC) => pC + 1)}}>+1ボタン</button>
//       <button onClick={() => {setC(0)}}>リセット</button>
//     </div>
//   </div>
//  )
// }

type CProps = {
  count: number
}
type DProps = {
  display: boolean
}
const Timer = (props: CProps) => {
  const {count} = props
  const [getC, setC] = useState(count)
  const CountZouka = () => {
    setC((pC) => pC + 1)
    console.log('カウント+1')
  }
  const CBF = () => {
    alert("服さよ実行")
    const timer = setInterval(CountZouka, 1000)
    return () => {
      console.log("タイマー削除")
      clearInterval(timer)
    }
  }
  useEffect(CBF, [])


  return (
    <div>
      <p>現在のカウント数: {getC}</p>
      <button onClick={() => {
        setC(count)
      }}>初期化</button>
    </div>
  )
}
const FookDayo = (props: DProps) => {
  const {display} = props
  const [getD, setD] = useState(display)
  return (
    <div>
     <button onClick={() => setD(!getD)}>{getD ? 'タイマーをhi表示' : 'タイマーを表示'}</button>
     {getD && <Timer count={0} />}
    </div>
  )
}
// -------------------------------------------------------
export default FookDayo

  