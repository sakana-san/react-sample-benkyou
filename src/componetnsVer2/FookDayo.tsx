import { type } from 'os'
import React, { useState, useEffect, useCallback, useMemo } from 'react'


//  useEffect クリーンアップなし--------------------------------------

// type FookDayo = {
//   check: string[]
// }

// const values = [
//   {id: 1, item: 'モニター'},
//   {id: 2, item: 'マウス'},
//   {id: 3, item: 'キーボード'}
// ]

// const FookDayo = () => {
//   const [getC, setC] = useState(0)
//   const CBF = () => {
//     document.title = `${getC}回押下されました`
//   }
//   useEffect(CBF, [getC])
//   const onClick = (s: string) => {
//     if (s == '増') {
//       setC(getC + 1)
//     } else {
//       setC(0)
//     }
//   }
//  return(
//   <div>
//     <p>現在のカウント数: {getC}</p>
//     <button onClick={() => onClick('増')}>+1</button>
//     <button onClick={() => onClick('減')}>リセット</button>
//   </div>
//  )
// }

// --------------------------------------



//  useEffect クリーンアップあり　--------------------------------------

// type CP = {
//   count: number
// }

// const values = [
//   {id: 1, item: 'モニター'},
//   {id: 2, item: 'マウス'},
//   {id: 3, item: 'キーボード'}
// ]
// const Timer = (props: CP) => {
//   const {count} = props
//   const [getC, setC] = useState(count)
//   const onClick = () => {
//     setC(0)
//   }
//   const zouka = () => {
//     setC((cp) => cp + 1)
//     console.log("カウント +1")
//   }
//   const CBF = () => {
//     alert('副作用実行')
//     const timer = setInterval(zouka, 1000)
//     return () => {
//       console.log('timerの削除')
//       clearInterval(timer)
//     }
//   }
//   useEffect(CBF, [])
//   return (
//     <div>
//       <p>現在のカウント数: {getC}</p>
//       <button onClick={onClick}>初期化</button>
//     </div>
//   )
// }

// const FookDayo = () => {
//   const [getD, setD] = useState(false)
//   const onClick = () => {

//     setD(!getD)
//   }
//  return(
//   <div>
//     <button onClick={onClick}>{getD ? 'タイマーを非表示' : 'タイマーを表示'}</button>
//     {getD && <Timer count={0} />}
//   </div>
//  )
// }

// --------------------------------------



//  useMemo　--------------------------------------

const Square = (n: number) => {
  const testData = [...Array(1000).keys()]
  testData.forEach((n) => {
    console.log("ループ処理") 
  })
  return  n * n
}
const FookDayo = () => {
  const [gcA, scA] = useState(0)
  const [gcB, scB] = useState(0)
  const onClickA = () => {
    scA((cp) => cp + 1)
  }
  const onClickB = () => {
    scB((cp) => cp + 1)
  }
  const keisan = useMemo(() => Square(gcB), [gcB])
 return(
  <div>
    <p>
      計算結果A: {gcA}
      <button onClick={onClickA}>計算: A+1</button>
    </p>
    <p>
      計算結果B: {gcB}
      <button onClick={onClickB}>計算: B+1</button>
    </p>
    <p>
      正方形の面積
    </p>
    { keisan }
  </div>
 )
}

// --------------------------------------


export default FookDayo