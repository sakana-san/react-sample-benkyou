
const Text = (props: {content: string}) => {
  const { content } = props
  return (
    <p>{content }</p>
  )
}


const Message = (props: {}) => {
   const content1 = 'いろは'
   const content2 = 'ほへと'

  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
    </div>
  )
}

export default Message