

const Youkoso = () => {

  const onClick = () => {
    alert('ようこそ！')
  }
  const text = '押してください'
  return (
    <div>
      <p>{text}</p>
      <button onClick={onClick}>押下</button>
    </div>
  )
}



export default Youkoso