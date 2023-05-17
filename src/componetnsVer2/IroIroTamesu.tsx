import { type } from 'os'
import React, { useState } from 'react'


// カウンター --------------------------------------
// type CProps = {
//   count: number
// }
// const CounterText = (props: CProps) => {
//   const {count} = props
//   return (
//     <p>現在のカウント数: {count}</p>
//   )
// }

// const IroIroTamesu = (props: CProps) => {
//   const {count} = props
//   const [getC, setC] = useState(count)
//   const onClick = (s: string) => {
//     switch (s) {
//       case '増':
//         setC(count + 1)
//         break
//       case '減':
//         setC((cp) => cp - 1)
//         break
//       case '初':
//         setC(0)
//         break
//     }
//   }
//   return (
//     <div>
//       <CounterText count={getC} />
//       <button onClick={() => onClick('増')}>増加</button>
//       <button onClick={() => onClick('減')}>減少</button>
//       <button onClick={() => onClick('初')}>初期化</button>
      
//     </div>
//   )
// }

// --------------------------------------




// セレクト --------------------------------------



// type CProps = {
//   count: number
// }
// const values = [
//   {id: 1, item: 'HTML'},
//   {id: 2, item: 'CSS'},
//   {id: 1, item: 'JS'}
// ]

// const OptionItems = values.map((value) => {
//   return(
//     <option value={value.item} key={value.id}>{value.item}</option>
//   )
// })
// const IroIroTamesu = () => {
//   const [getInp, setInp] = useState('count')
//   const onChange = (e: { target: { value: string } }) => {
//     setInp(e.target.value)
//   }
//   return (
//     <div>
//      <p>現在選択されている値: {getInp}</p>
//      <select value={getInp} onChange={onChange}>
//       {OptionItems}
//      </select>
      
//     </div>
//   )
// }

// --------------------------------------


// チェックボックス --------------------------------------

type CheProps = {
  check: string[]
}

const values = [
  {id: 1, item: 'モニター'},
  {id: 2, item: 'マウス'},
  {id: 3, item: 'キーボード'}
]

const IroIroTamesu = () => {
  const [getInp, setInp] = useState<string[]>([])
  const onChange = (e: { target: { value: string }}) => {
    if (getInp.includes(e.target.value)) {
      setInp(
        getInp.filter((v) => {
          return v !== e.target.value
        })
      )
      console.log("上", getInp)
    } else {
      console.log("した")
      setInp([...getInp, e.target.value])
    }
  }
  return (
    <div>
     <p>現在選択されている値: {getInp}</p>
     {values.map((value) => (
        <label key={value.id}>
          <input
            type="checkbox"
            value={value.item}
            onChange={onChange}
            checked={getInp.includes(value.item)}
          />
          {value.item}
        </label>
      ))}
    </div>
  )
}

// --------------------------------------



export default IroIroTamesu