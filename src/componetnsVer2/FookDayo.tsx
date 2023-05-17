import { type } from 'os'
import React, { useState, useEffect, useCallback } from 'react'


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



//  useEffect クリーンアップあり　--------------------------------------

type CP = {
  count: number
  text: string
}
type BT = {
  text: string
  onClick: () => void
}
const ConstResult = React.memo((props: CP) => {
  const {count, text } = props
  console.log(`${text}がクリックされました`)
  return (
    <div>
      <p>{text}: {count}</p>
    </div>
  )
})

const Btn = React.memo((props: BT) => {
  const {text, onClick} = props
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
})

const FookDayo = (props: CP) => {
  const {count } = props
  const [getA, setA] = useState(count)
  const [getB, setB] = useState(count)
 const onClick1 = useCallback(() => {
  setA((cp) => cp + 1)
 }, [])

 const onClick2 = useCallback(() => {
  setB((cp) => cp + 1)
 }, [])

 return(
  <div>
    <ConstResult count={getA} text="Aボタン" />
    <ConstResult count={getB} text="Bボタン" />
    <Btn onClick={onClick1} text="A" />
    <Btn onClick={onClick2} text="B" />
  </div>
 )
}

// --------------------------------------


export default FookDayo