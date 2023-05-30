import React, {useState, useMemo } from "react"
import { Flex, Stack, Button, Text, Box, SimpleGrid,Input, Divider } from "@chakra-ui/react"





//計算、正方形 ----------------------------------------------------------------------
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


const Sample1 = (props: CountProps) => {
  const { init } = props
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
      <Stack spacing={4} direction='row' align='center' padding="10">
        <Result init={getCount} text='計算結果A' onClick={handleClickIroha} />
        <Result init={getCount2} text='計算結果B' onClick={handleClickHoheto} />
      </Stack>
      <Stack spacing={4} direction='row' padding="10">
        <div>
          <p>計算結果B X 計算結果B = {SeihoukeiResult()}</p>
        </div>
      </Stack>
      <Divider />
    </>
  )
}
// ----------------------------------------------------------------------------------------------






// 文字入力 ----------------------------------------------------------------------
const Sample2 = () => {
  const [getText, setText] = useState('')
  const [items, setItems] = useState<string[]>([])
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const onClick = () => {
    setItems((c) => [...c, getText])
    setText('')
  }
  {/* @ts-ignore */ }
  const Total1 = items.reduce((sub, item) => {
    return item.length
  }, 0)
  const Total2 = useMemo(() => {
    return items.reduce((sub, item) => item.length, 0)
  }, [items])
  return (
    <>
      <Text fontSize='4xl' align='center' mt='5'>useMemoSample2</Text>
      <Flex justify='center' mb='10'>
        <Box mr='20' padding='0'> 
          <Box mt='10' >
            <Input value={getText} variant='filled' placeholder='Filled' onChange={onChange} mb='4' />
            <Button colorScheme='teal' size='lg' onClick={onClick}>加える</Button>
          </Box>
        </Box>
        <Box mr='20' padding='0 20'>
          <Text fontSize='2xl' align='left'>入力値</Text>
          <Box fontSize='2xl'>
            {items.map((v, i) => (
              <Text key={i} fontSize='2xl' align='left'>{v}</Text>
            ))}
          </Box>
        </Box>
        <Box mr='20' padding='0'> 
          <Text fontSize='2xl' align='left'>総合数: {Total1}</Text>
          <Text fontSize='2xl' align='left'>総合数2: {Total2}</Text>
        </Box>
      </Flex>
    </>
  )
}





export const Keisan = () => {
  
  return (
    <>
      <Text fontSize='4xl' align='center'>useMemoSample1</Text>
      <Text fontSize='1xl' align='center'>関数の結果を保持するための鉤である。</Text>
      <Text fontSize='1xl' align='center'>useCallbackは関数ごとメモ化するが、useMemoは関数の結果をメモ化し、保持する。</Text>
      <Sample1 init={0} text='' onClick={() => void {}} />
      <Sample2 />
    </>
  )
}