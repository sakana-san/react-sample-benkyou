import {memo, useState} from 'react'


type FProps = {
  isF: boolean
}
const F = (props: FProps) => {
  const {isF} = props
  console.log(`Fが再描画されました。isF=${isF}`)
  return (
    <div>
      {isF ? 'F' : ''}
    </div>
  )
}

type BProps = {
  isB: boolean
}

const B = memo<BProps>((props) => {
  const {isB} = props
  console.log(`Bが再描画されました。isB=${isB}`)

  return (
    <div>
      {isB ? 'B' : ''}
    </div>
  )
})

export const Parent = () => {
  const [count, setCount] = useState(1)
  const isF = count % 3 === 0
  const isB = count % 5 === 0
  console.log(`Parentが再描画されました。 count=${count}`)

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}> +1 </button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <F isF={isF} />
        <B isB={isB} />
      </p>
    </div>
  )
}