import React, {useState, useReducer, memo, useCallback, useMemo} from 'react'

// type ContainProps = {
//   title: string
//   children: React.ReactNode
// }
// type DescProps = {
//   description: string
// }

// const Container = (props : ContainProps): JSX.Element => {
//   const {title, children } = props
//   return (
//     <div>
//       <span>{title}</span>
//       <p>
//         {children}
//       </p>
//     </div>
//   )
// }

// const Title = (props: DescProps): JSX.Element => {
//   const { description } = props
//   return (
//     <div>
//       <span>{description}</span>
//     </div>
//   )
// }

// const Parent = (): JSX.Element => {
//   return (
//     <div>
//       <Container title="ようこそ">
//         <Title description="テストです。"　/>
//       </Container>
//     </div>
//   )
// }

// export default Parent





// Context provider Consumer

// import React from 'react'

// type DescProps = {
//   description: string
// }
// const HogeContext = React.createContext('')
// const HogeConDesc = React.createContext('')

// const Desc = () => {
//   return (
//     <div>
//        <HogeConDesc.Consumer>
//         {(desc) => {
//           return <span>{desc}</span>
//         }}
//        </HogeConDesc.Consumer>
//     </div>
//   )
// }

// const Title = () => {
//   return (
//     <div>
//        <HogeContext.Consumer>
//         {(title) => {
//           return <span>{title}</span>
//         }}
//        </HogeContext.Consumer>
//        <HogeConDesc.Provider value="あいうえお">
//          <Desc />
//         </HogeConDesc.Provider>
//     </div>
//   )
// }

// const Parent = () => {
//   return (
//     <div>
//       <HogeContext.Provider value="ようこそ">
//         <Title /> 
//       </HogeContext.Provider>
//     </div>
//   )
// }

// export default Parent


// フック　use State

// type CounterProps = {
//   initalNum: number
// }

// const Parent = (props: CounterProps): JSX.Element => {
//   const {initalNum} = props
//   const [count, setCount] = useState(initalNum)
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => {setCount(count + 1) }}> + </button>
//       <button onClick={() => {setCount(count - 1) }}> - </button>
//     </div>
//   )
// }


// フック　useReducer

// type Action = '増加' | '減少'

// type CounterProps = {
//   initalNum: number
// }

// const reducer = (currentCount: number, action: Action) => {
//   if (action === '増加') {
//     return currentCount + 1
//   } else {
//     return currentCount - 1
//   }
// }
// const Parent = (props: CounterProps): JSX.Element => {
//   const {initalNum} = props
//   // const [count, setCount] = useState(initalNum)
//   const [count, dispatch] = useReducer(reducer, initalNum)
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => {dispatch('増加') }}> + </button>
//       <button onClick={() => {dispatch('減少') }}> - </button>
//     </div>
//   )
// }


// フック　useCallbackとuseMemo メモ化フック
// type Fprops = {
//   isF: boolean
// }

// type Bprops = {
//   isB: boolean
// }

// const F = (props: Fprops) => {
//   const {isF} = props
//   console.log("F描画")
//   return (
//     <span>{isF ? 'F!' : ''}</span>
//   )
// }

// const B = memo<Bprops>((props) => {
//   const {isB} = props
//   console.log("B描画")
//   return (
//     <span>{isB ? 'B!' : ''}</span>
//   )
// })

// const Parent = () => {
//   const [count, setCount] = useState(1)
//   const isF = count % 3 === 0
//   const isB = count % 5 === 0
//   return (
//     <div>
//       <button onClick={() => setCount((c) => c+1)}>+</button>
//       <p>{`現在のカウント: ${count}`}</p>
//       <div>
//         <F isF={isF} />
//         <B isB={isB} />
//       </div>
//     </div>
//   )
// }


// フック　useCallbackとuseMemo メモ化フック onClick
// type Fprops = {
//   isF: boolean
// }

// type Bprops = {
//   isB: boolean
//   onClick: () => void
// }

// const F = (props: Fprops) => {
//   const {isF} = props
//   console.log("F描画")
//   return (
//     <span>{isF ? 'F!' : ''}</span>
//   )
// }

// const B = memo<Bprops>((props) => {
//   const {isB, onClick} = props
//   console.log("B描画")
//   return (
//     <span onClick={onClick}>{isB ? 'B!' : ''}</span>
//   )
// })

// const Parent = () => {
//   const [count, setCount] = useState(1)
//   const isF = count % 3 === 0
//   const isB = count % 5 === 0
//   const onBClick = () => {
//     console.log("Bがクリックされました")
//   }
//   return (
//     <div>
//       <button onClick={() => setCount((c) => c+1)}>+</button>
//       <p>{`現在のカウント: ${count}`}</p>
//       <div>
//         <F isF={isF} />
//         <B onClick={onBClick} isB={isB} />
//       </div>
//     </div>
//   )
// }

// フック　useCallbackとuseMemo メモ化フック onClick
// type Fprops = {
//   isF: boolean
// }

// type Bprops = {
//   isB: boolean
//   // onClick: () => void
// }

// type BtnProps = {
//   onClick: () => void
// }

// const F = (props: Fprops) => {
//   const {isF} = props
//   console.log("F描画")
//   return (
//     <span>{isF ? 'F!' : ''}</span>
//   )
// }

// const B = memo<Bprops>((props) => {
//   // const {isB, onClick} = props
//   const {isB} = props
//   console.log("B描画")
//   return (
//     <span>{isB ? 'B!' : ''}</span>
//   )
// })

// const BtnContent = (props: BtnProps) => {
//   const {onClick} = props
//   return (
//     <button onClick={onClick}>+</button>
//   )
// }

// const BtnContent2 = memo<BtnProps>((props) => {
//   const {onClick} = props
//   return (
//     <button onClick={onClick}>-</button>
//   )
// })

// const Parent = () => {
//   // const [count, setCount] = useState(1)
//   const [count, setCount] = useState(0)
//   const isF = count % 3 === 0
//   const isB = count % 5 === 0
//   const onBClick = () => {
//     setCount((c) => c+1)
//     console.log("クリックされました")
//   }
//   const onBClick2 = useCallback(() => {
//     setCount((c) => c - 1)
//   }, [])
//   return (
//     <div>
//       <BtnContent onClick={onBClick} />
//       <BtnContent2 onClick={onBClick2} />
//       {/* <button onClick={() => setCount((c) => c+1)}>+</button> */}
//       <p>{`現在のカウント: ${count}`}</p>
//       <div>
//         <F isF={isF} />
//         {/* <B onClick={onBClick} isB={isB} /> */}
//         <B isB={isB} />
//       </div>
//     </div>
//   )
// } 

// フック　usememo

type Fprops = {
    isF: boolean
  }
  
  type Bprops = {
    isB: boolean
    // onClick: () => void
  }
  
  type BtnProps = {
    onClick: () => void
  }
  
  const F = (props: Fprops) => {
    const {isF} = props
    console.log("F描画")
    return (
      <span>{isF ? 'F!' : ''}</span>
    )
  }
  
  const B = memo<Bprops>((props) => {
    // const {isB, onClick} = props
    const {isB} = props
    console.log("B描画")
    return (
      <span>{isB ? 'B!' : ''}</span>
    )
  })
  
  const BtnContent = (props: BtnProps) => {
    const {onClick} = props
    return (
      <button onClick={onClick}>+</button>
    )
  }
  
  const BtnContent2 = memo<BtnProps>((props) => {
    const {onClick} = props
    return (
      <button onClick={onClick}>-</button>
    )
  })
  
  const Parent = () => {
    // const [count, setCount] = useState(1)
    const [count, setCount] = useState(0)
    const [items, setItems] = useState<number[]>([])
    const isF = count % 3 === 0
    const isB = count % 5 === 0
    const onBClick = () => {
      setCount((c) => c+1)
      setItems((item) => {
        return [...item, count]
      })
      console.log("クリックされました")
    }
    const onBClick2 = useCallback(() => {
      setCount((c) => c - 1)
    }, [])
    return (
      <div>
        <BtnContent onClick={onBClick} />
        <BtnContent2 onClick={onBClick2} />
        {/* <button onClick={() => setCount((c) => c+1)}>+</button> */}
        <p>{`現在のカウント: ${count}`}</p>
        <p>{`itemsの値: ${items}`}</p>
        <div>
          <F isF={isF} />
          {/* <B onClick={onBClick} isB={isB} /> */}
          <B isB={isB} />
        </div>
      </div>
    )
  } 
  

export default Parent


