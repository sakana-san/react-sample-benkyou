import { type } from 'os'
import React, { useState } from 'react'


// ようこそ -------------------------------------------------------
// type YoukosoProps = {
//   handleV: any
//   text: string
// }

// const BtnElement = (props: YoukosoProps) => {
//   const {text} = props
//   const onClick = () => {
//    props.handleV(text)
//   }
//   return (
//     <div>
//       <button onClick={onClick}>押下</button>
//     </div>
//   )
// }

// const IroiroTamesu = () => {
//   const [getText, setText] = useState('')
//   const handleV = () => {
//     setText('ようこそ')
//   }
//   return (
//     <div>
//         <p>{getText}</p>
//       <BtnElement text={''} handleV={handleV}/>
//     </div>
//   )
  
// }

// const InputDom = () => {
//     const [name, setName] = useState('')
//   const [text, setText] = useState('')
//   const onChange = (e: { target: { value: string } }) => {
//     setName(e.target.value)
//   }
//   const onClick = () => {
//     setText(name)
//   }
//   return (
//     <div>
//       <label htmlFor="name">{text}</label>
//       <input type="text" onChange={onChange}/>
//       <input type="button" onClick={onClick} />
//     </div>
//   )
// }

// type CProps = {
//   counter: number
// }
// const CountText = (props: CProps): JSX.Element => {
//   const {counter} = props
//   return (
//     <div>
//       <button>{counter}</button>
//     </div>
//   )
// }
// const IroiroTamesu = (props: CProps) => {
//   const {counter} = props
//   const [count, setCount] = useState(counter)
//  return(
//   <div>
//    <CountText counter={count} />
//    <button onClick={() => setCount(count + 1) }>増加</button>
//    <button onClick={() => setCount((prevC) => prevC - 1)}>減少</button>
//    <button onClick={() => setCount(0)}>初期化</button>
//   </div>
//  )
// }

// const Values = [
//   {id: 1, item: 'HTML'},
//   {id: 2, item: 'CSS'},
//   {id: 3, item: 'JS'}
// ]

// const SelectItems = Values.map((v) => {
//   return (
//     <option value={v.item} key={v.id}>{v.item}</option>
//   )
// })
// const IroiroTamesu = () => {
//   const [selectValue, setSelectValue] = useState(Values[0]['item'])
//   const handleChange = (e: { target: { value: string }}) => {
//     setSelectValue(e.target.value)
//   }
//  return(
//   <div>
//     <p>{selectValue}</p>
//     <select
//       value={selectValue}
//       onChange={handleChange}
//     >
//       {SelectItems}
//     </select>
//   </div>
//  )
// }



// const values = [
//   {id: 1, item: 'HTML'},
//   {id: 2, item: 'CSS'},
//   {id: 3, item: 'javascritpt'},
// ]

// type CHP = {
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
//   checked: string[]
// }

// const CheckBtn = (props:CHP) => {
//   const {onChange, checked} = props
//   return (
//     <div>
//       {values.map((value) => (
//           <label key={value.id}>
//           <input
//             type="checkbox"
//             value={value.item}
//             onChange={onChange}
//             checked={checked.includes(value.item)}
//           />
//           {value.item}
//         </label>
//       ))}
//     </div>
//   )
// }


// const IroiroTamesu = () => {
//   const [cV, setCV] = useState<string[]>([])
//   const onChange = (e: { target: { value: string } }) => {
//     if (cV.includes(e.target.value)) {
//       setCV(cV.filter((c) => {
//         return c !== e.target.value
//       }))
//     } else {
//       setCV([...cV, e.target.value])
//     }
    
//   }
//  return(
//   <div>
//     <p>現在選択されている値 {cV}</p>
//     <CheckBtn onChange={onChange} checked={cV} />
//   </div>
//  )
// }

type CountProps = {
  count: number
}
type TextProps = {
  text: string
}
const Counter = (props: CountProps) => {
  const {count} = props
  const [getC, setC] = useState(count)
  return (
    <div>
      <p>現在のカウント数: {getC}</p>
      <p>カウントの初期値: {count}</p>
      <div>
        <button onClick={() => {setC(count + 1) }}>増加</button>
        <button onClick={() => {setC((pC) => pC - 1)}}>減少</button>
        <button onClick={() => {setC(0)}}>初期化</button>
      </div>
    </div>
  )
}

const Hello = (props: TextProps) => {
  const {text} = props
  const [getT, setT] = useState(text)
  return (
    <div>
      <p>ようこそ！ {getT}</p>
      <p>nameの初期値: {text}</p>
      <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setT(e.target.value)
      }} />
    </div>
  )
}

const IroiroTamesu = () => {
  return (
  <div>
    <Counter count={0} />
    <Hello text={'javascript'} />
  </div>
  )
}

// -------------------------------------------------------
export default IroiroTamesu

  