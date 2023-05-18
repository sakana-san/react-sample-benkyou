import React, {useEffect, useState} from "react";
import axios from "axios";
import { type } from "os";

type Todos = {
  id: number
  content: string
  done: boolean
}

const todoDataUrl = "http://localhost:3001/todos";
function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>todo進捗管理</h1>
      <button>+ todoを追加</button>
      <h2>todoリスト</h2>
      <ul>
        {
         todoList.map((v: any) => (
          <li key={v.id}>
            {v.content}({v.done ? '完了' : '未完了'})
          </li>
         ))
        }
      </ul>
    </>
  );
}

export default App;
