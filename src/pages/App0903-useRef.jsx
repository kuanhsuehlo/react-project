import React, { useRef,useState } from 'react'

const App = () => {
    // const [inputValue, setInputValue] = useState('123');

    // useRef變數給input(相當於document.querySelector)
    const inputRef = useRef(null);

    console.log('App render了...');

    function btnHandler(){
        // console.log(inputValue)

        // 查看
        console.log(inputRef);

        // 查看ref值
        console.log(inputRef.current.value);

        // 查看Ref類別
        console.log(inputRef.current.type);

        // 更改類型
        inputRef.current.type="password";

         // 查看Ref類別
        console.log(inputRef.current.type);

    }

    return (
        <div className='wrap'>
            <h1>useRef</h1><hr />
            {/* <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/> */}

            {/* 使用useRef */}
            <input type="text" ref={inputRef}/>
            <button onClick={btnHandler}>Click</button>
        </div>
    )
}

export default App