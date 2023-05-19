import React, {useEffect, useState, useRef} from "react";
import { Container } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Textarea, Button } from "@chakra-ui/react";
import axios from "axios";
import { useTodo } from "../hooks/useTodo";


type TitleProps = {
  title: string
  size: string
  fontSize: any
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



const TodoTitle = (props: TitleProps) => {
  const {title, size} = props
  if (size === 'h1') return <h1>{title}</h1>
  if (size === 'h2') return <h2>{title}</h2>

  return <p>{title}</p>
}

const TodoList = (props: TodoListProps) => {
  const {todoList, deleteTodoListItem, toggleTodoListItem} = props
  return (
    <ul>
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
    </ul>
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
    <li>
      {item}
      <button onClick={handleToggleTodoListItem}>{flag ? "未完了リストへ" : "完了リストへ"}</button>
      <button onClick={handleDeleteTodoListItem}>削除</button>
    </li>
  )
}

const TodoAdd = (props: TodoAddProps) => {
  const {onClick, inputEl, placeholder} = props
  return (
    <>
      <textarea
        placeholder={placeholder}
        ref={inputEl}
      />
      <button onClick={onClick}>+ todoを追加</button>
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
