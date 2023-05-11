
const Container = (props: {title: string, children: React.ReactElement}) => {
  const { title, children } = props
  return (
    <div>
      <span>{title}</span>
      {children}
    </div>
  )
}


const Parent = () => {
   return (
      <Container title="ちりぬるの">
      　<p>わがよ</p>
      </Container>
  )
}

export default Parent