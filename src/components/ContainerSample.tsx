// 子
const Container = (props: {title: string; children: React.ReactElement}) => {
  const {title, children} = props
  return (
    <div style={{ backgroundColor: 'blue' }}>
      <span>{title}</span>
      {children}
    </div>
  )
}

// 親
const Parent = () => {
  return (
    <Container title="我が世夢ぞ">
      <p>つねならん</p>
    </Container>
  )
}
export default Parent