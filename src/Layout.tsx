import React, {useEffect, useState, useRef, memo, useCallback} from "react";
import { chakra, Heading, Container } from "@chakra-ui/react";
import { DeleteIcon, AddIcon, StarIcon } from "@chakra-ui/icons";
import { List, ListItem, Text, Flex, IconButton, Textarea, Button } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <>
      <Heading
        mb="10"
        padding="5"
        bgColor="blue.600"
        fontSize="sm"
        w="full"
      >
        <header>
          <nav>
            <Flex alignItems="center" justifyContent="center">
              <li style={{listStyle: 'none'}}>
                <Button><Link to='/'>topページ</Link></Button>
              </li>
              <li style={{listStyle: 'none'}}>
              <Button ml="10"><Link to='Practice'>練習ページ</Link></Button>
              </li>
            </Flex>
          </nav>
        </header>
      </Heading>
      <main>
        <Outlet />
      </main>
      <chakra.footer py={4} bgColor={'blue.600'} color={'white'}>
        <Container maxW={'container.lg'} textAlign="center">Footer</Container>
      </chakra.footer>
    </>
  )
}