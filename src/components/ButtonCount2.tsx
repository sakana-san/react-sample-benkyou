import React, {useState, useReducer, useCallback} from "react"
import { Stack, Button, Text, Box, Divider } from "@chakra-ui/react"

type CountProps = {
  init: number,
  text: string
}

type ClickProps = {
  text: string,
  onClick: () => void
}

const Result = (props: CountProps) => {
  const {init, text} = props
  return(
    <>
      <p>{text}: {init}</p>
    </>
  )
}

const ButtonClick = React.memo((props: ClickProps) => {
  const { text, onClick } = props
  console.log(`${text}がクリックされました。`)
  return (
    <Button colorScheme='teal' size='lg' onClick={onClick}>
      {text}
    </Button>
  )
})

export const ButtonCount2 = (props: CountProps) => {
  const {init} = props
  const [getCount, setCount] = useState(init)
  const [getCount2, setCount2] = useState(init)
  const handleClickIroha = useCallback(() => {
    setCount((c: number) => c + 1)
  }, [getCount])
  const handleClickHoheto = useCallback(() => {
    setCount2((c: number) => c + 1)
  }, [getCount2])
  return (
    <>
      <Text fontSize='4xl' align='center'>useCallback</Text>
      <Text fontSize='1xl' align='center'>React.memoとお揃いで使用する。</Text>
      <Text fontSize='1xl' align='center'>コールバック関数をpropsで渡す度に再生成されてしまうが、useCallback（メモ化）を使うことで再生成を防げる。</Text>
      <Text fontSize='1xl' align='center'>つまり、React.memoで包んだ部品に、メモ化された関数をpropsで渡せば、部品を不要に再生成させないのである。</Text>
      <Result init={getCount} text='いろはボタン' />
      <Result init={getCount2} text='ほへとボタン' />
      <Stack spacing={4} direction='row' align='center' padding="10">
        <ButtonClick text='いろはボタン' onClick={handleClickIroha} />
        <ButtonClick text='ほへとボタン' onClick={handleClickHoheto} />
      </Stack>
      <Divider />
    </>
  )
}