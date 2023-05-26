import React, {useState, useEffect} from "react"
import { Stack, Button, Text, Box } from "@chakra-ui/react"

type CounterProps = {
  initVal: number,
  usText: string
  urText: string
}
const Hook1 = (props: CounterProps) => {
  const {initVal, usText} = props
  const [getCount, setCount] = useState(initVal)
  return (
    <>
     <Box>
        <Text fontSize='4xl' align='center'>useStateの場合</Text>
        <Text fontSize='1xl' align='center'>{usText}</Text>
        <Text fontSize='3xl' align='center'>勘定: { getCount }</Text>
        <Stack spacing={4} direction='row' align='center' padding="10">
          <Button colorScheme='teal' size='lg' onClick={() => {setCount((c) => c + 1) }}>
          増加
          </Button>
          <Button colorScheme='teal' size='lg' onClick={() => {setCount((c) => c - 1) }}>
          減少
          </Button>
          <Button colorScheme='teal' size='lg' onClick={() => {setCount((c) => c * 2) }}>
          倍増
          </Button>
          <Button colorScheme='teal' size='lg' onClick={() => {setCount(0) }}>
          初期化
          </Button>
        </Stack>
      </Box>
    </>
  )
}



type Action = '増加' | '減少' | '倍増' | '初期化'
const reducer = (count: number, action: Action) => {
  switch (action) {
    case '増加':
      return count + 1
    case '減少':
      return count - 1
    case '倍増':
      return count * 2
    case '初期化':
      return 0
    default:
      return count
  }
}


type CountProps = {
  init:  number,
  ueText: string,
  ueText2: string
}

const CountBrowser = (props: CountProps) => {
  const {init, ueText, ueText2} = props
  const [getCount, setCount] = useState(init)
  const callF = () => {
    document.title = `${getCount}回クリックされました。`
  }
  // 変化があった場合、getCountの更新を描画後反映
  useEffect(callF, [getCount])

  const handleClick = (str: string) => {
    setCount(str === '増加' ? (c) => c + 1 : 0)
  }
  return (
    <>
      <Text fontSize='4xl' align='center'>useEffect</Text>
      <Text fontSize='1xl' align='center'>{ueText}</Text>
      <Text fontSize='1xl' align='center'>{ueText2}</Text>
      <Text fontSize='3xl' align='center'>現在の回数: {getCount}</Text>
      <Stack spacing={4} direction='row' align='center' padding="10">
        <Button colorScheme='teal' size='lg' onClick={() => handleClick('増加') }>+1</Button>
        <Button colorScheme='teal' size='lg' onClick={() => handleClick('初期化') }>初期化</Button>
      </Stack>
    </>
  )
}



type IntervalProps = {
  init:  number
  display: boolean
}

const IntervalCountBrowser = (props: IntervalProps) => {
  const {init, display} = props
  const [getCount, setCount] = useState(init)
  const [getDisplay, setDisplay] = useState(display)
  return (
    <>
      <Text fontSize='3xl' align='center'>現在の回数: {getCount}</Text>
      <Stack spacing={4} direction='row' align='center' padding="10">
      <Button colorScheme='teal' size='lg' onClick={() => setDisplay(!getDisplay) }>{getDisplay ? 'タイマー表示' : 'タイマーを非表示'}</Button>
        <Button colorScheme='teal' size='lg' onClick={() => setCount(0) }>初期化</Button>
      </Stack>
    </>
  )
}

const ClockCounter = () => {
  return (
    <>
      <CountBrowser
        init={0}
        ueText='再描画後にprops,stateの値を更新する。useEffect(関数(副作用), [更新値])。'
        ueText2='第二引数、空の場合初回のみ、値ありの場合更新値を反映。'
      />
      <IntervalCountBrowser  init={0} display={false} />
    </>
  )
}

export default ClockCounter