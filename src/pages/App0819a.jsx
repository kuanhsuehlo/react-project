// import React from 'react'


// 建立子元件
// function Mycoponent(props){ // props
// 物件解構
function Mycoponent({ props }) {
    console.log(props)
    return <>
        <div>Hello</div>
        {/* 標準寫法 */}
        <div>{props.a}</div>
        <div>{props.b}</div>
        {props.c()}
    </>
}

// 物件解構=> {物件成員}
function Mycoponent2({ a, b, c }) {
    return <>
        <div>Hello</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

// 物件解構=> {物件成員}
function Mycoponent3({ a, b = "我是預設值", c }) {
    c();
    return <>
        <div>Hello</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        {c()}
    </>
}

// 父元件
const App0819a = () => {
    return (
        <>
    {/* 呼叫元件 */}
            <Mycoponent a="我是屬性a" b="我是屬性b" c={() => { console.log("123") }} />
            <Mycoponent2 a="我是屬性a" b="我是屬性b" c={() => { console.log("456") }} />
            <Mycoponent3 a="我是屬性a" b="我是屬性b" c={() => { console.log("789") }} />
        </>
    )
}

export default App0819a