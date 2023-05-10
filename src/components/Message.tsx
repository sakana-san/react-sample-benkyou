// 子
const Text = (props: {content: string}) => {
  const {content} = props
  return (
    <p className="text">
      {content}
    </p>
  )
}

// 親
const Message = () => {
  const content1 = 'いろはにほへと'
  const content2 = 'ちりぬるを'
  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
    </div>
  )
}
export default Message