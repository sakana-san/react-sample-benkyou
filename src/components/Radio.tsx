import React, {useState} from "react"
import { Flex, Button, Box, SimpleGrid } from "@chakra-ui/react"


type RProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: string
}
const radioAry = [
  {
    "id": 1,
    "item": "赤"
  },
  {
    "id": 2,
    "item": "青"
  },
  {
    "id": 3,
    "item": "黄"
  }
]
const RadioItems = (props: RProps) => {
  const { onChange, checked } = props
  return (
    <>
      <Box bg='tomato' height='80px'>
        <label>
          <input type="radio" />
          赤
        </label>
      </Box>
      <Box bg='tomato' height='80px'>
        <label>
          <input type="radio" />
          青
        </label>
      </Box>
      <Box bg='tomato' height='80px'>
        <label>
          <input type="radio" />
          黄
        </label>
      </Box>
    </>
  )
}

export const Radio = () => {
  const [gV, sV] = useState(radioAry[0]['item'])
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    sV(e.target.value)
  }
  return (
    <>
      <p style={{textAlign: "center"}}>現在選択されている値</p>
      <p style={{textAlign: "center"}}>{}</p>
      <SimpleGrid minChildWidth='120px' spacing='40px' padding="10">
        <RadioItems onChange={onChange} checked={gV} />
      </SimpleGrid>
    </>
  )
}