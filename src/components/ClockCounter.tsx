import React, {useState, useEffect} from "react"
import { Stack, Button, Text } from "@chakra-ui/react"


// useEffect 第二引数ありの場 ーーーーーーーーーーーーーーーーーーーーーーーーーーーー
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

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー




// useEffect 第二引数が空の場合 ーーーーーーーーーーーーーーーーーーーーーーーーーーーー

type IntervalProps = {
  init: number
  display: boolean
  ueText3: string
}
type timerProps = {
  count: number,
  autoCount: any
}

const Timer = (props: timerProps) => {
  const {count, autoCount} = props
  const zouka = () => {
    autoCount((c: number) => c + 1)
    console.log('カウント+1')
  }
  const callF = () => {
    console.log("副作用実行")
    const timer = setInterval(zouka, 1000)
    return () => {
      console.log('timer削除')
      console.log('timer部品解除時、再描画時、return内の処理が発火')
      autoCount(0)
      clearInterval(timer)
    }
  }
  useEffect(callF, [])
  return (
    <>
      <Text fontSize='3xl' align='center'>現在の回数: {count}</Text>
    </>
  )
}

const IntervalCountBrowser = (props: IntervalProps) => {
  const {init, display, ueText3} = props
  const [getCount, setCount] = useState(init)
  const [getDisplay, setDisplay] = useState(display)
  const handleClick = () => {
    setCount(0)
    setDisplay(false)
  }
  return (
    <>
      <Text fontSize='4xl' align='center'>useEffect</Text>
      <Text fontSize='1xl' align='center'>{ueText3}</Text>
      {
        getDisplay ? 
        <Timer count={getCount} autoCount={setCount}　/> :
        <Text fontSize='3xl' align='center'>現在の回数: 0</Text>
      }
      <Stack spacing={4} direction='row' align='center' padding="10">
        <Button colorScheme='teal' size='lg' onClick={() => setDisplay(!getDisplay) }>{getDisplay ? 'タイマー表示' : 'タイマーを非表示'}</Button>
        <Button colorScheme='teal' size='lg' onClick={() => handleClick() }>初期化</Button>
      </Stack>
    </>
  )
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

const ClockCounter = () => {
  return (
    <>
      <CountBrowser
        init={0}
        ueText='再描画後にprops,stateの値を更新する。useEffect(関数(副作用), [更新値])。'
        ueText2='第二引数に値があるので、描画後、更新値をブラウザに反映。'
      />
      <IntervalCountBrowser init={0} display={false} ueText3='第二引数が空なので、初回のみ実行' />
    </>
  )
}

export default ClockCounter