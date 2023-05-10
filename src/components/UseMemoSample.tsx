import React, {useState, useMemo} from 'react'

export const UseMemoSample = () => {

  // textは現在のテキストボックスの中身の値を保持する。
  const [normaltext, setText] = useState('')
  // itemsは文字列リストを保持する
  const [items, setItems] = useState<string[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const onClickButton = () => {
    setItems((prevItems) => {
      // 現在の入力値をitemsに追加する。この時新しい配列を作成して保存する。
      return [...prevItems, normaltext]
    })
    setText('')
  }

  // 再描画のたびにitems.reduceを実行して結果を得る
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)

  // useMemoを使い、itemsが更新されるタイミングで、items.reduceを実行して結果を得る。
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0)
    // 第二引数の配列にitemsがあるので、itemsが新しくなったときだけ関数を実行し、メモを更新する。
  }, [items])

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={normaltext} onChange={onChangeInput} />
        <button onClick={onClickButton}>追加</button>
      </div>
      <div>
        {
          items.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        }
      </div>
      <div>
        <p>一番の結果: {numberOfCharacters1}</p>
        <p>二番の結果: {numberOfCharacters2}</p>
      </div>
    </div>
  )
}