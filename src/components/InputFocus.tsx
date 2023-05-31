import React, {useState, useRef, useEffect } from "react"
import { Flex, Button, Text, Box,Input, Divider } from "@chakra-ui/react"



// 文字入力 ----------------------------------------------------------------------
const Sample1 = () => {
  const InputObjectRef = useRef<HTMLInputElement>(null)
  const [getText, setText] = useState('')
  const [getS, setS] = useState(false)

  useEffect(() => {
    console.log('再生成しますよ！')
  })

  const handleClick = () => {
    if (InputObjectRef.current !== null) {
      setText(InputObjectRef.current.value)
    }
  }

  const handleReset = () => {
    if (InputObjectRef.current !== null) {
      setText('')
      InputObjectRef.current.value = ''
    }
  }

  return (
    <>
      <Text fontSize='4xl' align='center' mt='5'>useRef1</Text>
      <Flex justify='center' mb='10'>
        <Box mr='20' padding='0'> 
          <Box mt='10' >
            <Input type='text' ref={InputObjectRef} variant='filled' placeholder='入力してください' mb='4' />
            <Button colorScheme='teal' size='lg'mr='10' onClick={handleClick}>入力値</Button>
            <Button colorScheme='teal' size='lg' onClick={handleReset}>初期化</Button>
          </Box>
        </Box>
        <Box mr='20' padding='0 20'>
          <Text fontSize='2xl' align='left'>値: {getText}</Text>
        </Box>
      </Flex>
    </>
  )
}
// --------------------------------------------------------------------------------------------------------------------------------------------






// アップロード ----------------------------------------------------------------------
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const UPLOAD_OKURE = 5000
const Sample2 = () => {
  
  const InputImageRef = useRef<HTMLInputElement>(null)
  const FileRef = useRef<File | null>(null)
  const [getMessage, setMessage] = useState<string | null>('')

  const onClickText = () => {
    if (InputImageRef.current !== null) {
      InputImageRef.current.click()
    }
  }

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files !== null && files.length > 0) {
      // @ts-ignore
      FileRef.current = files[0]
    }
  }

  const onClickUpload = async () => {
    if (FileRef.current !== null) {
      await sleep(UPLOAD_OKURE)
      setMessage(`${FileRef.current.name}のアップロードが成功しました。`)
    }
  }

  return (
    <>
      <Text fontSize='4xl' align='center' mt='5'>useRef2</Text>
      <Flex justify='center' mb='10'>
        <Box mr='20' padding='0'>
          <Box mt='10' >
            <Text fontSize='2xl' align='left' decoration={'underline'} onClick={onClickText}>画像をアップロード</Text>
            <Input type='file' ref={InputImageRef} accept='image/*' onChange={onChangeImage} multiple mb='4' hidden />
            <Button colorScheme='teal' size='lg' mr='10' onClick={onClickUpload}>アップロードする</Button>
          </Box>
        </Box>
        <Box mr='20' padding='0 20'>
          <Text fontSize='2xl' align='left'>値: {getMessage}</Text>
        </Box>
      </Flex>
    </>
  )
}
// --------------------------------------------------------------------------------------------------------------------------------------------



export const InputFocus = () => {
  
  return (
    <>
      <Text fontSize='4xl' align='center'>useRef</Text>
      <Text fontSize='1xl' align='center'>部品の値を保持、値を更新してもしても部品が再生成されない。</Text>
      <Text fontSize='1xl' align='center'>useStateは値保持と更新時、再生成。useRefは値保持と更新時、非再生成。</Text>
      <Sample1 />
      <Divider />
      <Sample2 />
    </>
  )
}