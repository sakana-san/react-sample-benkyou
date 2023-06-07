import React, {useState, useReducer} from "react"
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
  console.log('count', count)
  console.log('action', action)
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

const Hook2 = (props: CounterProps) => {
  const {initVal, urText, usText} = props
  const [getCount, dispatch] = useReducer(reducer, initVal)
  return (
    <>
      <Box>
        <Text fontSize='4xl' align='center'>useReducerの場合</Text>
        <Text fontSize='1xl' align='center'>{urText}</Text>
        <Text fontSize='1xl' align='center'>{usText}</Text>
        <Text fontSize='3xl' align='center'>勘定: { getCount }</Text>
        <Stack spacing={4} direction='row' align='center' padding="10">
          <Button colorScheme='teal' size='lg' onClick={() => {dispatch('増加') }}>
          増加
          </Button>
          <Button colorScheme='teal' size='lg' onClick={() => {dispatch('減少') }}>
          減少
          </Button>
          <Button colorScheme='teal' size='lg' onClick={() => {dispatch('倍増') }}>
          倍増
          </Button>
          <Button colorScheme='teal' size='lg' onClick={() => {dispatch('初期化') }}>
          初期化
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export const Counter = () => {
  return (
    <>
      <Hook1 initVal={0} usText="状態の保持と管理。const [状態, 更新関数] = useState(初期値)" urText='' />
      <Hook2 initVal={0} urText={'状態の保持と管理。const [状態, 更新関数(dispatch)] = useReducer(reducer, reducerに渡される初期値)。'} usText="useStateより複雑な用途時に使用する。" />
    </>
  )
}