import React, {useEffect, useState, useRef, memo} from "react";
import { Heading, Container } from "@chakra-ui/react";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { List, ListItem, Text, Flex, IconButton, Textarea, Button } from "@chakra-ui/react";
import axios from "axios";
import { useTodo } from "../hooks/useTodo";
import { Link } from "react-router-dom";


type TitleProps = {
  title: string
  size: string
  fontSize: any
  mt: any
}

type TodoListProps = {
  todoList: string[]
  deleteTodoListItem: any
  toggleTodoListItem: any
}

type TodoItemProps = {
  id: number
  key: number
  item: string
  flag: boolean
  deleteTodoListItem: any
  toggleTodoListItem: any
}

type TodoAddProps = {
  onClick: () => void
  inputEl: any
  leftIcon: any
  placeholder: string
}



const TodoTitle = memo((props: TitleProps) => {
  const {title, size, fontSize, mt} = props
  return (
    <>
      <Heading
        mt={mt}
        size={size}
        fontSize={fontSize}
        w="full"
      >
        {title}
      </Heading>
      <p>
        <Link to="/Hello">Hello</Link>
      </p>
    </>

  )
})

const TodoList = (props: TodoListProps) => {
  const {todoList, deleteTodoListItem, toggleTodoListItem} = props
  return (
    <List w="full">
      {
        todoList.map((v: any) => (
          <TodoItem
            item={v.content}
            flag={v.done}
            key={v.id}
            id={v.id}
            deleteTodoListItem={deleteTodoListItem}
            toggleTodoListItem={toggleTodoListItem}
          />
        ))
      }
    </List>
  )
}

const TodoItem = (props: TodoItemProps) => {
  const {item, flag , id, deleteTodoListItem, toggleTodoListItem} = props
  const handleDeleteTodoListItem = () => {
    deleteTodoListItem(id)
  }
  const handleToggleTodoListItem = () => {
    toggleTodoListItem(id, flag)
  }
  return (
      <ListItem
        borderWidth="1px"
        p="4"
        mt="4"
        bg="white"
        borderRadius="md"
        borderColor="gray.300"
      >
        <li>
          <Text mb="6">{item}</Text>
          <Flex alignItems="center" justifyContent="flex-end">
            <Button
              onClick={handleToggleTodoListItem}
              colorScheme={flag ? "pink" : "bule"}
              variant="outline"
              size="sm"
            >
              {flag ? "未完了リストへ" : "完了リストへ"}
            </Button>
            <IconButton
              icon={<DeleteIcon />}
              variant="unstyled"
              aria-label="delete"
              onClick={handleDeleteTodoListItem}
            />
          </Flex>
        </li>
      </ListItem>
  )
}

const TodoAdd = (props: TodoAddProps) => {
  const {onClick, inputEl, leftIcon, placeholder} = props
  return (
    <>
      <Textarea
        placeholder={placeholder}
        ref={inputEl}
        /* @ts-ignore */
        bgColor="white"
        mt="8"
        borderColor="gray.300"
      />
      {/* @ts-ignore */}
      <Button onClick={onClick} colorScheme="blue" leftIcon={leftIcon} mt="8">+ todoを追加</Button>
    </>
  )
}


function App() {
  const { todoList, addTodoListItem, deleteTodoListItem, toggleTodoListItem}:any = useTodo()
  const inputEl = useRef<HTMLTextAreaElement>(null)

  // 方式 --------------------------------------------------
  const handleAddTodoListItem = () => {
    if (inputEl.current?.value === '') return

    addTodoListItem(inputEl.current?.value)
    if (inputEl.current?.value) {
      inputEl.current.value = ''
    }
  }


  console.log('Todoリスト', todoList);  
  const inCompList = todoList.filter((d: any) => {
    return !d.done;
  })
  const compList = todoList.filter((d: any) => {
    return d.done;
  })
  // --------------------------------------------------


  return (
    <>
    <Container centerContent p={{base: "4", md: "6"}} maxWidth="3xl">

      <TodoTitle
        title="todo進捗管理"
        size="h1"
        fontSize={{base: "2xl", md: "3xl"}}
        mt="8"
      />
      <TodoAdd
        onClick={handleAddTodoListItem}
        inputEl={inputEl}
        leftIcon={<AddIcon />}
        placeholder="記述してください"
      />


      <TodoTitle
        title="未完成todoリスト"
        size="h2"
        fontSize={{base: "xl", md: "2xl"}}
        mt="8"
      />
      <TodoList
        todoList={inCompList}
        deleteTodoListItem={deleteTodoListItem}
        toggleTodoListItem={toggleTodoListItem}
      />


      <TodoTitle
        title="完成todoリスト"
        size="h2"
        fontSize={{base: "xl", md: "2xl"}}
        mt="8"
      /> 
      <TodoList
        todoList={compList}
        deleteTodoListItem={deleteTodoListItem}
        toggleTodoListItem={toggleTodoListItem}
      />
    </Container>
    </>
  );
}

export default App;
