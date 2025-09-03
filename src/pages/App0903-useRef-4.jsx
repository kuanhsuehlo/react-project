import React, { useRef } from 'react'

const App = () => {

    const changeRef = useRef(null);

    function turnGreen() {
        changeRef.current.style.backgroundColor="green";
    }
    return (
        <div>
            <h1>useRef-點擊輸入變色</h1><hr />
            文字方塊1<input type="text" ref={changeRef} onFocus={turnGreen}/>
            <br />
            文字方塊2<input type="text" />
            <br />
            文字方塊3<input type="text" />
            <br />
        </div>
    )
}

export default App