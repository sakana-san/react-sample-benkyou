import React, {useState, useReducer} from "react"
import { Link } from "react-router-dom"
import {  Stack, Box, Text, Flex, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


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
  const [getHoge, setHoge] = useState('')
  const [getResult, setResult] = useState('')
  const handleClick = () => {
    setHoge(Random.text)
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
        <Text fontSize='3xl' align='center'>相手: {getHoge}</Text>
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
    </>
  )
}


export const RepeatPractice = () => {
  return (
    <>
      <Sample1 init={0} />
      <Sample2 init={0} />
    </>
  )
}


