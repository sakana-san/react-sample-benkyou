import React from 'react'

const TitleContext = React.createContext('')

const Title = () => {
  return (
    <div>
      <TitleContext.Consumer>
        {(title) => {
          return <h1>{title}</h1>
        }}
      </TitleContext.Consumer>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}


const Page = () => {
  const title = 'タイトルです'
   
  return (
      <TitleContext.Provider value={title}>
        <Header />
      </ TitleContext.Provider>
  )
}

export default Page