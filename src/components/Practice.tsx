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
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Button ml="10"><Link to='/Radio'>ラジオページ</Link></Button>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
    </>
  )
}