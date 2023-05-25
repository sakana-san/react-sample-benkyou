import React, {useState} from "react"
import { Stack, Button, ButtonGroup, Box, SimpleGrid } from "@chakra-ui/react"

type CounterProps = {
  initVal: number
}

export const Counter = (props: CounterProps) => {
  const {initVal} = props
  const [getCount, setCount] = useState(initVal)
  return (
    <>
    <p>{getCount }</p>
     <Stack spacing={4} direction='row' align='center' padding="10">
      <Button colorScheme='teal' size='lg' onClick={() => {setCount((c: any) => c + 1) }}>
        増加
      </Button>
      <Button colorScheme='teal' size='lg'>
        減少
      </Button>
      <Button colorScheme='teal' size='lg'>
        倍増
      </Button>
      <Button colorScheme='teal' size='lg'>
        初期化
      </Button>
    </Stack>
    </>
  )
}