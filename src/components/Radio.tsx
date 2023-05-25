import React, {useState} from "react"
import { Box, SimpleGrid } from "@chakra-ui/react"


type RProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  checked: string
}
const radioAry = [
  {
    "id": 1,
    "item": "red"
  },
  {
    "id": 2,
    "item": "blue"
  },
  {
    "id": 3,
    "item": "yellow"
  }
]
const RadioItems = (props: RProps) => {
  const { onChange, checked } = props
  return (
    <>
       {
        radioAry.map((v) => (
          <Box bg={v.item} height='80px'>
            <label key={v.id}>
              <input
                type="radio"
                value={v.item}
                onChange={onChange}
                checked={checked === v.item}
              />
              {v.item}
          </label>
          </Box>
        ))
      }
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
      <p style={{textAlign: "center"}}>
        {gV}
      </p>
      <Box bg={gV} w='100%' p={4} />
      <SimpleGrid minChildWidth='120px' spacing='40px' padding="10">
        <RadioItems onChange={onChange} checked={gV} />
      </SimpleGrid>
    </>
  )
}