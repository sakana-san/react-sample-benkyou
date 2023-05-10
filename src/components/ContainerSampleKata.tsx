//型を定義
type ContainerProps = {
  title: string
  children: React.ReactNode
}

// 子
const Container = (props: ContainerProps): JSX.Element => {
  const {title, children} = props
  return (
    <div style={{ backgroundColor: 'blue' }}>
      <span>{title}</span>
      {children}
    </div>
  )
}

// 親
const Parent = (): JSX.Element => {
  return (
    <Container title="我が世夢ぞ">
      <p>つねならん</p>
    </Container>
  )
}
export default Parent