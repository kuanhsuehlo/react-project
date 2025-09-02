// import React from 'react'
// 次元件
function SecondComponent({ c }) {
  return <>
    <h1>我是secondComponent元件</h1>
    <p>secondComponent接收的屬性是：{c}</p>
  </>
}

function MyComponent2({ b }) {
  return (
    <>
      <h2>接收來自於主元件的傳遞</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum asperiores sapiente, non voluptas voluptates nam esse adipisci, doloribus, natus culpa aliquid minima aspernatur eveniet sed recusandae temporibus ullam? Explicabo, voluptatibus!</p>
      <SecondComponent c={b} />
      我是：{b}
    </>
  )
}

// 子元件接收主元件傳遞過來的元件
function Mycomponent({ a, children }) {
  return (
    <>
      <h2>接收來自於主元件的傳遞</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum asperiores sapiente, non voluptas voluptates nam esse adipisci, doloribus, natus culpa aliquid minima aspernatur eveniet sed recusandae temporibus ullam? Explicabo, voluptatibus!</p>
      {children}
      我是：{a}
    </>
  )
}

// 主元件
const App0819b = () => {
  return (
    <div>
      <h1>元件之間，傳遞元件</h1><hr />
      {/* 此方法是比較進階 */}
      <Mycomponent a="屬性a">
        <SecondComponent c="屬性a" />
      </Mycomponent>

      <hr />
      <MyComponent2 b="屬性b" />
    </div>
  )
}

export default App0819b