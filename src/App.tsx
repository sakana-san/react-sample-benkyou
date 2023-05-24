import React, {useEffect, useState, useRef, memo, useCallback} from "react";
import { Heading, Container } from "@chakra-ui/react";
import { DeleteIcon, AddIcon, StarIcon } from "@chakra-ui/icons";
import { List, ListItem, Text, Flex, IconButton, Textarea, Button } from "@chakra-ui/react";
import { useTodo } from "./hooks/useTodo";
import { Link } from "react-router-dom";


// 型 ---------------------------------------------------------------------
type TitleProps = {
  title: string
  size: string
  fontSize: any
  mt: any
  ml: any
}

type TodoListProps = {
  todoList: string[]
  goodN: Number,
  deleteTodoListItem: any
  toggleTodoListItem: any
  goodTodoListItem: any
}

type TodoItemProps = {
  id: number
  key: number
  item: string
  flag: boolean,
  goodN: number,
  deleteTodoListItem: any
  toggleTodoListItem: any
  goodTodoListItem: any
}

type TodoAddProps = {
  onClick: () => void
  inputEl: any
  leftIcon: any
  placeholder: string
}
// ---------------------------------------------------------------------




// TodoTitle ---------------------------------------------------------------------
const TodoTitle = memo((props: TitleProps) => {
  const {title, size, fontSize, mt, ml} = props
  return (
    <>
      <Heading
        mt={mt}
        size={size}
        fontSize={fontSize}
        w="full"
      >
        {title}
        {
          title === 'todo進捗管理' ?
          <Button ml={ml}><Link to="./Practice">練習ページへ</Link></Button> :
          ''
        } 
      </Heading>
    </>

  )
})
// ---------------------------------------------------------------------




// TodoList ---------------------------------------------------------------------
const TodoList = (props: TodoListProps) => {
  const {todoList, goodN, deleteTodoListItem, toggleTodoListItem, goodTodoListItem} = props
  return (
    <List w="full">
      {
        todoList.map((v: any) => (
          <TodoItem
            item={v.content}
            flag={v.done}
            key={v.id}
            id={v.id}
            goodN={v.good}
            deleteTodoListItem={deleteTodoListItem}
            toggleTodoListItem={toggleTodoListItem}
            goodTodoListItem={goodTodoListItem}
          />
        ))
      }
    </List>
  )
}
// --------------------------------------------------



// TodoItem ---------------------------------------------------------------------
const TodoItem = React.memo((props: TodoItemProps) => {
  const {item, flag , id, goodN, deleteTodoListItem, toggleTodoListItem, goodTodoListItem} = props
  const [count, setCount] = useState(goodN)
  const handleDeleteTodoListItem = () => {
    deleteTodoListItem(id)
  }
  const handleToggleTodoListItem = () => {
    toggleTodoListItem(id, flag)
  }
  const handleGoodTodoListItem = useCallback(() => {
    if (flag) {
      setCount((c) => c + 1)
      goodTodoListItem(id, count)
    }
  }, [count])
  return (
      <ListItem
        borderWidth="1px"
        p="4"
        mt="4"
        bg="white"
        borderRadius="md"
        borderColor="gray.300"
      >
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
            icon={<StarIcon />}
            variant="unstyled"
            aria-label="good"
            onClick={handleGoodTodoListItem}
          />
            {count}
          <IconButton
            icon={<DeleteIcon />}
            variant="unstyled"
            aria-label="delete"
            onClick={handleDeleteTodoListItem}
          />
        </Flex>
      </ListItem>
  )
})
// --------------------------------------------------



// TodoAdd ---------------------------------------------------------------------
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

// --------------------------------------------------



function App() {
  const { todoList, goodN, addTodoListItem, deleteTodoListItem, toggleTodoListItem, goodTodoListItem}:any = useTodo()
  const inputEl = useRef<HTMLTextAreaElement>(null)

  // 方式 --------------------------------------------------
  const handleAddTodoListItem = () => {
    if (inputEl.current?.value === '') return

    addTodoListItem(inputEl.current?.value)
    if (inputEl.current?.value) {
      inputEl.current.value = ''
    }
  }

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
        ml="10"
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
        ml="10"
      />
      <TodoList
        todoList={inCompList}
        goodN={goodN}
        deleteTodoListItem={deleteTodoListItem}
        toggleTodoListItem={toggleTodoListItem}
        goodTodoListItem={goodTodoListItem}
      />


      <TodoTitle
        title="完成todoリスト"
        size="h2"
        fontSize={{base: "xl", md: "2xl"}}
        mt="8"
        ml="10"
      /> 
      <TodoList
        todoList={compList}
        goodN={goodN}
        deleteTodoListItem={deleteTodoListItem}
        toggleTodoListItem={toggleTodoListItem}
        goodTodoListItem={goodTodoListItem}
      />
    </Container>
    </>
  );
}

export default App;

