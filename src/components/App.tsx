import React, {useEffect, useState, useRef} from "react";
import axios from "axios";
import { useTodo } from "../hooks/useTodo";


type TProps = {
  title: string
  size: string
}

type TLProps = {
  todoList: string[]
}

type TIProps = {
  key: number
  item: string
  flag: boolean
}



const TodoTitle = (props: TProps) => {
  const {title, size} = props
  if (size === 'h1') return <h1>{title}</h1>
  if (size === 'h2') return <h2>{title}</h2>

  return <p>{title}</p>
}

const TodoList = (props: TLProps) => {
  const {todoList} = props
  return (
    <ul>
      {
        todoList.map((v: any) => (
          <TodoItem item={v.content} flag={v.done} key={v.id} />
        ))
      }
    </ul>
  )
}

const TodoItem = (props: TIProps) => {
  const {item, flag} = props
  return (
    <li>
      {item}
      <button>{flag ? "未完了リストへ" : "完了リストへ"}</button>
      <button>削除</button>
    </li>
  )
}


function App() {
  const { todoList, addTodoListItem }:any = useTodo()

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
      <TodoTitle title="todo進捗管理" size="h1"/>
      <h1></h1>
      <textarea  ref={inputEl} />
      <button onClick={handleAddTodoListItem}>+ todoを追加</button>

      <TodoTitle title="未完成todoリスト" size="h2"/>
      <TodoList todoList={inCompList} />


      <TodoTitle title="完成todoリスト" size="h2"/> 
      <TodoList todoList={compList} />
    </>
  );
}

export default App;
