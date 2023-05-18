import axios from "axios"

// localhostはポート3000
// モックサーバーはポート3001
//　ポートを分けないと画面が真っ白になる
const todoDataUrl = "http://localhost:3001/todos";

export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
};

export const addTodoData = async (todo: any) => {
  //第二引数に、送信したいデータを指定してPOST送信。
  // サーバーに転送することで新規データを追加する。
  const response = await axios.post(todoDataUrl, todo); 
  //通信後response.dataでデータを返す
  return response.data
}

export const deleteTodoData = async (id: number) => {
  await axios.delete(`${todoDataUrl}/${id}`)
  return id
}

export const updateTodoData = async (id: number, todo: any) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo)
  return response.data
}
