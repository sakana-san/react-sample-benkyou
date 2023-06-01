import React, { useState, useRef, useEffect, useContext, createContext, ReactNode } from "react"
import { Flex, Stack, Button, Text, Box, SimpleGrid,Input, Divider } from "@chakra-ui/react"



// メッセージ ----------------------------------------------------------------------------------------------------------------------------------

const SampleContext = createContext('')
const ConsumerComponent = () => {
  const messageText = useContext(SampleContext)
  return(
    <Text fontSize='4xl' align='center'>{messageText}</Text>
  )
}

// --------------------------------------------------------------------------------------------------------------------------------------------


// 数珠つなぎ ----------------------------------------------------------------------------------------------------------------------------------


const TextContext = createContext('')
// @ts-ignore
const TextProvider = ({children}) => {
  const JuzuInitText = 'これはProviderから渡されたテキストです。'
  return (
    <>
      <TextContext.Provider value={JuzuInitText}>
        {children}
      </TextContext.Provider>
    </>
  )
}

const Oya = () => {
  return (
    <>
      <Text fontSize='4xl' align='center'>親</Text>
      <Kodomo />
    </>
  )
}

const Kodomo = () => {
  return (
    <>
      <Text fontSize='4xl' align='center'>子</Text>
      <Mago />
    </>

  )
}

const Mago = () => {
  const JuzuMagoText = useContext(TextContext)
  return (
    <>
      <Text fontSize='4xl' align='center'>孫: {JuzuMagoText}</Text>
    </>
  )
}


// --------------------------------------------------------------------------------------------------------------------------------------------



// 勘定数珠つなぎ ----------------------------------------------------------------------------------------------------------------------------------
const CountText = createContext(0)
// @ts-ignore
const CountProvider = ({ children }) => {
  const [getCount, setCount] = useState(0)
  return (
    // @ts-ignore
    <CountText.Provider value={[ getCount, setCount ]}>
      {children}
    </CountText.Provider>
  )
}

const CountBox = () => {
  return (
    <>
      <CountDisplay />
    </>
  )
}

const CountDisplay = () => {
  // @ts-ignore
  const [getCount, setCount] = useContext(CountText)
  const onClick = () => {
    setCount((c: number) => c + 1)
  }
  return (
    <>
      <Text fontSize='4xl' align='center'>{getCount}</Text>
      <Button colorScheme='teal' size='lg' onClick={onClick}>+1ボタン</Button>
    </>
  )
}


// --------------------------------------------------------------------------------------------------------------------------------------------


export const Message = () => {
  const message = 'いろはにほへとちりぬるを'
  return (
    <>
      <Text fontSize='4xl' align='center'>useConText1</Text>
      <Text fontSize='1xl' align='center'>propsで数珠つなぎをしなくても、子孫に直接渡せる。</Text>
      <SampleContext.Provider value={message}>
        <ConsumerComponent />
      </SampleContext.Provider>
      <Divider />
      <Text fontSize='4xl' align='center'>useConText2</Text>
      <TextProvider>
        <Oya />
      </TextProvider>
      <Divider />
      <Text fontSize='4xl' align='center'>useConText3</Text>
      <CountProvider>
        <CountBox />
      </CountProvider>
    </>
  )
}