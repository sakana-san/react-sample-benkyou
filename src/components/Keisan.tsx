import React, {useState, useMemo } from "react"
import { Stack, Button, Text, Box, Divider } from "@chakra-ui/react"

type CountProps = {
  init: number,
  text: string,
  onClick: () => void
}

const Result = (props: CountProps) => {
  const {init, text, onClick} = props

  return(
    <>
      <p>{text}: {init}</p>
      <Button colorScheme='teal' size='lg' onClick={onClick}>
        {text}
      </Button>
    </>
  )
}

const Seihoukei = (num: number) => {
  console.log('クリックされた num', num)
  return num * num
}

export const Keisan = (props: CountProps) => {
  const {init} = props
  const [getCount, setCount] = useState(init)
  const [getCount2, setCount2] = useState(init)
  const handleClickIroha = () => {
    setCount((c: number) => c + 1)
  }
  const handleClickHoheto = () => {
    setCount2((c: number) => c + 1)
  }

  const SeihoukeiResult = () => useMemo(() => Seihoukei(getCount2), [getCount2])
  return (
    <>
      <Text fontSize='4xl' align='center'>useMemo</Text>
      <Text fontSize='1xl' align='center'>関数の結果を保持するための鉤である。</Text>
      <Text fontSize='1xl' align='center'>useCallbackは関数ごとメモ化するが、useMemoは関数の結果をメモ化し、保持する。</Text>
      <Stack spacing={4} direction='row' align='center' padding="10">
        <Result init={getCount} text='計算結果A' onClick={handleClickIroha}  />
        <Result init={getCount2} text='計算結果B' onClick={handleClickHoheto}  />
      </Stack>
      <Stack spacing={4} direction='row' padding="10">
        <div>
          <p>計算結果B X 計算結果B = { SeihoukeiResult() }</p>
        </div>
      </Stack>
      <Divider />
    </>
  )
}