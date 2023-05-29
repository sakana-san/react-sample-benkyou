import React, {useState, useReducer} from "react"
import { Stack, Button, Text, Box, Divider } from "@chakra-ui/react"

type CountProps = {
  init: number,
  text: string
}

// memoラップ時------------------------------------------------------------------------
const Result = React.memo((props: CountProps) => {
  const {init, text} = props
  console.log(`${text}がクリックされた`)
  return(
    <>
      <p>{text}: {init}</p>
    </>
  )
})
// ------------------------------------------------------------------------------------


// memo無し-----------------------------------------------------------------------------
// const Result = (props: CountProps) => {
//   const { init, text } = props
//   console.log(`${text}がクリックされた`)
//   return (
//     <>
//       <p>{text}: {init}</p>
//     </>
//   )
// }
// --------------------------------------------------------------------------------------


export const ButtonCount = (props: CountProps) => {
  const {init} = props
  const [getCount, setCount] = useState(init)
  const [getCount2, setCount2] = useState(init)
  const handleIroha = () => {
    setCount((c) => c + 1)
  }

  const handleHoheto = () => {
    setCount2((c) => c + 1)
  }
  return (
    <>
      <Result init={getCount} text='いろはボタン' />
      <Result init={getCount2} text='ほへとボタン' />
      <Stack spacing={4} direction='row' align='center' padding="10">
        <Button colorScheme='teal' size='lg' onClick={() => { handleIroha() }}>
          いろはにボタン
        </Button>
        <Button colorScheme='teal' size='lg' onClick={() => { handleHoheto() }}>
          ほへとボタン
        </Button>
      </Stack>
      <Divider />
    </>
  )
}