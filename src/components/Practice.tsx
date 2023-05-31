import React from "react"
import { Link } from "react-router-dom"
import {  Flex, Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export const Practice = () => {
  return (
    <>
    <Flex alignItems="center" justifyContent="center">
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
          <Tab>練習1</Tab>
          <Tab>練習2</Tab>
          <Tab>練習3</Tab>
          <Tab>練習4</Tab>
          <Tab>練習5</Tab>
          <Tab>練習6</Tab>
          <Tab>練習7</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Button ml="10"><Link to='/Radio'>ラジオページ</Link></Button>
          </TabPanel>
          <TabPanel>
            <Button ml="10"><Link to='/Counter'>useStateとuseReducer</Link></Button>
          </TabPanel>
          <TabPanel>
            <Button ml="10"><Link to='/ClockCounter'>useEffect</Link></Button>
          </TabPanel>
          <TabPanel>
            <Button ml="10"><Link to='/ButtonCount'>React.memo</Link></Button>
          </TabPanel>
          <TabPanel>
            <Button ml="10"><Link to='/ButtonCount2'>useCallback</Link></Button>
          </TabPanel>
          <TabPanel>
            <Button ml="10"><Link to='/Keisan'>useMemo</Link></Button>
          </TabPanel>
          <TabPanel>
            <Button ml="10"><Link to='/InputFocus'>useRef</Link></Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
    </>
  )
}