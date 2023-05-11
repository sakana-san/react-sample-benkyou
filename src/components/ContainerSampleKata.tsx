
type ContainerProps = {
  title: string,
  children: React.ReactNode
}

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props
  return (
    <div>
      <span>{title}</span>
      {children}
    </div>
  )
}


const Parent = (): JSX.Element => {
   return (
      <Container title="ちりぬるの">
      　<p>わがよ</p>
      </Container>
  )
}

export default Parent