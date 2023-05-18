import React, {useEffect, useState} from "react"
import {ulid} from 'ulid'
import * as todoData from "../api/todos"


export const useTodo = () => {
  const [todoList, setTodoList] = useState<string[]>([])

  useEffect(() => {
    todoData.getAllTodosData().then((t: any) => {
      return setTodoList([...t])
    })
  }, [])
  // const addTodoListItem = (t: any) => {
  //   const FreshTodoItem = {
  //     content: t,
  //     id: ulid(),
  //     done: false
  //   };
  //   return todoData.addTodoData(FreshTodoItem).then((fItem) => {
  //     setTodoList([fItem, ...todoList]);
  //   });
  // };



  // const toggleTodosListItemStatus = (id: number, done: boolean) => {
  //   const todoItem = todoList.find((item: any) => item.id == id)
  //   const newTodoItem = { ...todoItem as {}, done: !done} 
  //   todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
  //     const newTodoList = todoList.map((item: any) =>
  //       item.id !== updatedTodo.id ? item : updatedTodo
  //     );
  //     setTodoList(newTodoList);
  //   });

  return {
    todoList
    // toggleTodosListItemStatus
  }

  
}
