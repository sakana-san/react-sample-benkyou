import React, {useState, useReducer, useEffect, useCallback, useMemo, useRef} from "react"
import { Link } from "react-router-dom"
import { Stack, Box, Text, Flex, Button, Divider, Input, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

// useState useReduce start ーーーーーーーーーーーーーーーーーーーーーーーーーーーー----------------------------------------------
type CP = {
  init: number
}

const Items = [
  {
    id: 1,
    text:'増加'
  },
  {
    id: 2,
    text: '減少'
  },
  {
    id: 3,
    text: '倍増'
  },
  {
    id: 4,
    text: '初期化'
  }
]

const Sample1 = (props: CP) => {
  const {init} = props
  const [getCount, setCount] = useState(init)

  const handleClick = (type: string) => {
    switch(type) {
      case '増加':
        setCount((c) => c + 1)
        break
      case '減少':
        setCount((c) => c - 1)
        break
      case '倍増':
        setCount((c) => c * 2)
        break
      case '初期化':
        setCount(0)
        break
    }
    
  }
  return (
    <>
      <Box>
        <Text fontSize='4xl' align='center'>useStateの場合</Text>
        <Text fontSize='3xl' align='center'>勘定: {getCount}</Text>
        <Stack spacing={4} direction='row' align='center' padding="10">
          {
           Items.map((v, i) => (
              <Button colorScheme='teal' size='lg' key={v.id} onClick={() => { handleClick(v.text) }}>
                {v.text}
              </Button>
           ))
          }
        </Stack>
      </Box>
      <Divider colorScheme="blue" />
    </>
  )
}





type jankenProps = {
  init: 0
}
type Action = 'グー' | 'チョキ' | 'パー'

const jankenItems = [
  {
    id: 0,
    text: 'グー'
  },
  {
    id: 1,
    text: 'チョキ'
  },
  {
    id: 2,
    text: 'パー'
  }
]
const reducer = (count: number, action: Action) => {
  if (action === 'グー') {
    return 0
  } else if (action === 'チョキ') {
    return 1
  } else {
    return 2
  }
  
}
const Random = jankenItems[Math.floor(Math.random() * 3)]

const Sample2 = (props: jankenProps) => {
  const { init } = props
  const [getCount, dispatch] = useReducer(reducer, init)
  const [getRival, setRival] = useState('')
  const [getResult, setResult] = useState('')
  const handleClick = () => {
    setRival(Random.text)
  }
  const handleResult = (id: number) => {
    if (id === Random.id) {
      setResult('あいこです')
    } else if (id === 0 && Random.id === 1) {
      setResult('あなたが勝ちました')
    } else if (id === 1 && Random.id === 2) {
      setResult('あなたが勝ちました')
    } else if (id === 2 && Random.id === 0) {
      setResult('あなたが勝ちました')
    } else {
      setResult('あなたが負けました')
    }
  }
  return (
    <>
      <Box>
        <Text fontSize='4xl' align='center'>useReducerの場合</Text>
        <Text fontSize='3xl' align='center'>相手: {getRival}</Text>
        <Text fontSize='3xl' align='center'>自分: {jankenItems[getCount].text}</Text>
        <Text fontSize='3xl' align='center'>結果: {getResult}</Text>
        <Stack spacing={4} direction='row' align='center' padding="10">
          {
            jankenItems.map((v, i) => (
              <Button colorScheme='teal' size='lg'key={v.id } onClick={() => {
                handleClick()
                // @ts-ignore
                dispatch(v.text)
                // @ts-ignore
                handleResult(v.id)
              }}>
                {v.text}
              </Button>
            ))
          }
        </Stack>
      </Box>
      <Divider colorScheme="blue" />
    </>
  )
}
// useState useReduce end ーーーーーーーーーーーーーーーーーーーーーーーーーーーー----------------------------------------------





// useEffect start ーーーーーーーーーーーーーーーーーーーーーーーーーーーー----------------------------------------------
type countProps = {
  init: number
}
const Sample3 = (props: countProps) => {
  const { init } = props
  const [getC, setC] = useState(init)
  const callF = () =>{
    document.title = `${getC}回クリックされました。`
  }
  useEffect(callF, [getC])
  const handleClick = (str: string) => {
    
    if (str === '増加') {
      setC((c) => c + 1)
    } else {
      setC(0)
    }
  }

  return(
    <>
      <Text fontSize='4xl' align='center'>useEffect</Text>
      <Text fontSize='3xl' align='center'>現在の回数: {getC}</Text>
      <Stack spacing={4} direction='row' align='center' padding="10">
        <Button colorScheme='teal' size='lg' onClick={() => handleClick('増加')}>+1</Button>
        <Button colorScheme='teal' size='lg' onClick={() => handleClick('初期化')}>初期化</Button>
      </Stack>
      <Divider colorScheme="blue" />
    </>
  )
}

type timerProps = {
  init: number,
  display: boolean
}
type cProps = {
  count: number,
  autCount: any
}
const Timer = (props: cProps) => {
  const { count, autCount } = props
  const callF = () => {
    console.log('クリック')
    const time = setInterval(() => {
      autCount((c: number) => c + 1)
    }, 1000)
    return () => {
      console.log('timer削除。timer部品解除時、再描画時、return内の処理が発火')
      autCount(0)
      clearInterval(time)
    }
  }

  useEffect(callF, [])
  return (
    <>
      <Text fontSize='3xl' align='center'>現在の回数: {count}</Text>
    </>
  )

}

const Sample4 = (props: timerProps) => {
  const {init, display} = props
  const [getC, setC] = useState(init)
  const [getD, setD] = useState(display)

  const handleClick = () => {
    setD(false)
  }
  return (
    <>
      <Text fontSize='4xl' align='center'>useEffect</Text>
      <Text fontSize='1xl' align='center'>タイマー</Text>
      {
        getD ?
          <Timer count={getC} autCount={setC} /> :
          <Text fontSize='3xl' align='center'>現在の回数: 0</Text>
      }
      <Stack spacing={4} direction='row' align='center' padding="10">
        <Button colorScheme='teal' size='lg' onClick={() => { setD(!getD) }}>{getD ? 'タイマー中止' : 'タイマー実行'}</Button>
        <Button colorScheme='teal' size='lg' onClick={() => handleClick()}>初期化</Button>
      </Stack>
    </>
  )
}

// useEffect end ーーーーーーーーーーーーーーーーーーーーーーーーーーーー----------------------------------------------



// reactMemo reactcallback start ーーーーーーーーーーーーーーーーーーーーーーーーーーーー----------------------------------------------
type sp5Props = {
  init: number
  text: string
}

type onClickProps = {
  text: string
  onClick: () => void
}
const Result = (props: sp5Props) => {
  const {init, text} = props
  return (
    <>
      <p>{text}: {init}</p>
    </>
  )
}
const Hbutton = React.memo((props: onClickProps) => {
  const {text, onClick} = props
  console.log(`${text}がクリックされた`)
  return (
    <>
      <Stack spacing={4} direction='row' align='center' padding="10">
        <Button colorScheme='teal' size='lg' onClick={onClick}>
          {text}
        </Button>
      </Stack>
    </>
  )
})
const Sample5 = (props: sp5Props) => {
  const {init} = props
  const [getC, setC] = useState(init)
  const [getC2, setC2] = useState(init)
  const handleIroha = useCallback(() => {
    setC((c) => c + 1)
  }, [getC])
  const handleHoheto = useCallback(() => {
    setC2((c) => c + 1)
  }, [getC2])
  return (
    <>
      <Text fontSize='4xl' align='center'>React.memo</Text>
      <Result init={getC} text='いろはボタン' />
      <Result init={getC2} text='ほへとボタン' />
      <Hbutton text='いろはボタン' onClick={handleIroha}  />
      <Hbutton text='ほへとボタン' onClick={handleHoheto} />
      <Divider />
    </>
  )

}


// useMemo end ーーーーーーーーーーーーーーーーーーーーーーーーーーーー----------------------------------------------

// useRef ーーーーーーーーーーーーーーーーーーーーーーーーーーーー----------------------------------------------

const InputContents = () => {
  const InputObjectRef = useRef<HTMLInputElement>(null)
  const [getT, setT] = useState('')
  const handleClick = () => {
    if (InputObjectRef.current !== null) {
      setT(InputObjectRef.current.value)
    }
  }
  const handleReset = () => {
    if (InputObjectRef.current !== null) {
      setT('')
      InputObjectRef.current.value = ''
    }
  }
  useEffect(() => {
    console.log('再生成しますよ！')
  })
  return (
    <>
      <Text fontSize='4xl' align='center' mt='5'>useRef1</Text>
      <Flex justify='center' mb='10'>
        <Box mr='20' padding='0'>
          <Box mt='10' >
            <Input type='text' ref={InputObjectRef} variant='filled' placeholder='入力してください' mb='4' />
            <Button colorScheme='teal' size='lg' mr='10' onClick={handleClick}>入力値</Button>
            <Button colorScheme='teal' size='lg' onClick={handleReset}>初期化</Button>
          </Box>
        </Box>
        <Box mr='20' padding='0 20'>
          <Text fontSize='2xl' align='left'>値: {getT}</Text>
        </Box>
      </Flex>
    </>
  )
}
const Sample6 = () => {
  return (
    <>
      <Text fontSize='4xl' align='center'>useRef</Text>
      <Text fontSize='1xl' align='center'>部品の値を保持、値を更新してもしても部品が再生成されない。</Text>
      <Text fontSize='1xl' align='center'>useStateは値保持と更新時、再生成。useRefは値保持と更新時、非再生成。</Text>
      <InputContents />
      <Divider />
    </>
  )
}

export const RepeatPractice = () => {
  return (
    <>
      <Sample1 init={0} />
      <Sample2 init={0} />
      <Sample3 init={0} />
      <Sample4 init={0} display={false} />
      <Sample5 init={0} text='' />
      <Sample6 />
    </>
  )
}


