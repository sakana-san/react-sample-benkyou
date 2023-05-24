import React, {useEffect, useState} from "react"
import {ulid} from 'ulid'
import * as todoData from "../api/todos"


export const useTodo = () => {
  const [todoList, setTodoList] = useState<string[]>([])
  const [goodN, setGoodN] = useState(0)

  useEffect(() => {
    todoData.getAllTodosData().then((t: any) => {
      return setTodoList([...t])
    })
  }, [])
  const addTodoListItem = (t: any) => {
    const FreshTodoItem = {
      content: t,
      id: ulid(),
      done: false,
      good: 0
    };
    return todoData.addTodoData(FreshTodoItem).then((fItem: any) => {
      console.log("f", fItem)
      setTodoList([fItem, ...todoList]);
    });
  };

  const deleteTodoListItem = (id: string) => {
    todoData.deleteTodoData(id).then((dItem: any) => {
      const deleteTodoItem = todoList.filter((item: any) => {
        return item.id !== dItem
      })
      setTodoList(deleteTodoItem)
    })

  }

  const toggleTodoListItem = (id: string, done: boolean) => {
    const todoItem = todoList.find((item: any) => item.id == id)
    const newTodoItem = { ...todoItem as {}, done: !done} 
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo: any) => {
      const newTodoList = todoList.map((item: any) =>
        item.id !== updatedTodo.id ? item : updatedTodo
      );
      setTodoList(newTodoList);
    });
  }

  const goodTodoListItem = (id: string, good: number) => {
    const goodItem = todoList.find((item: any) => item.id === id)
    const newGoodItem = {...goodItem as {}, good: good}
    todoData.updateTodoData(id, newGoodItem).then((updatedTodo: any) => {
      todoList.forEach((v:any, i:number) => {
        if (v.id === updatedTodo.id) {
          console.log("id",v.id)
          console.log("updatedTodo.id",updatedTodo.id)
          console.log("updatedTodo.content",updatedTodo.content)
          console.log("updatedTodo.good",updatedTodo.good)
          setGoodN(updatedTodo.good)
        }
      })
    })
  }
  return {
    todoList,
    goodN,
    addTodoListItem,
    deleteTodoListItem,
    toggleTodoListItem,
    goodTodoListItem
  }  
}
