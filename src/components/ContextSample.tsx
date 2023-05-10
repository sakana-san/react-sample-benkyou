import React from 'react'


// Contextでは、
// Providerでデータを渡し、Consumerでデータを受け取ります。


// タイトルを渡すためContextを作成
const TitleContText = React.createContext('')

// 部品 3
// タイトル部品の中でContextの値を参照します。
const Title = () => {
  return (
    // Consumerでデータを受け取ります。ß
    <TitleContText.Consumer>
      {/* Consumer直下に関数を置いて、Contextの値を参照します。*/}
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContText.Consumer>
  )
}

// 子 2
const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

// 親 1
// Page部品の中でContextに値を渡します。
const Page = () => {
  const title = 'ういほけふやまきょうこえて'
  // Providerを使いContextに値を付与します。
  return (
    // Providerでデータを渡します。
    <TitleContText.Provider value={title}>
      <Header />
    </TitleContText.Provider>
  )
}
export default Page