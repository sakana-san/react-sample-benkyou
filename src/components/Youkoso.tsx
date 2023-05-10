const Youkoso = () => {
  const onegai = 'ボタンを押してください'
  const title = 'ようこそ日本へ！'
  const onClick = () => {
    alert(title)
  }
  return (
    <div>
      {onegai}
      <button onClick={onClick}>押下</button>
    </div>
  )
}

export default Youkoso