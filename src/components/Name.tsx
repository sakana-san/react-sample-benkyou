import { ChangeEvent } from "react"


  let text = ''
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    text = e.target.value
    console.log(text)
  }



export const Name = () => {
  return (
    <div>
      <p>{text}</p>
      <input
        id="Name"
        type="text"
        onChange={onchange}
      />
    </div>
  )
}