import React, { useRef } from 'react'

const App = () => {
    // 建立useRef
    const inputRef = useRef(null);

    // 建立關閉密碼函式
    function closePassWord(){
        // 動態改變類型
        inputRef.current.type="password";
    }

    // 建立顯示密碼函式
    function showPassWord(){
        // 動態改變類型 text
        inputRef.current.type="text";
    }
  return (
    <div>
        <h1>useRef-開關密碼</h1>

        <input type="text" ref={inputRef}/>
        <button onClick={closePassWord}>關閉密碼</button>
        <button onClick={showPassWord}>查看密碼</button>
    </div>
  )
}

export default App