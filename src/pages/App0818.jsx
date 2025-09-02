import { useState } from 'react' // useState寫出來的時候會自己跑出來
// function MyComponent(){

// 建立元件
// 方法1
function MyComponent() {
    const [counts, setCounts] = useState(0);
    const handleClick = () => {
        setCounts(counts + 1);
    }
    return (
        // 呼叫自訂函式，不用加上小括號
        <button id='btn1' onClick={handleClick}>點擊次數:{counts}</button> // handleClick不要有()
    )
}

// 方法2
// 箭頭函式
// const  MyComponent=()=>{
//     return (

//     )
// }


// }
const App0818 = () => {

    // let counts=0;
    // const [counts, setCounts] = useState(0); // 陣列裡的框第一設名稱，第二個是變數
    return (
        <div>
            {/* <button id='btn1' onClick={() => {
                // counts++; // 常數不能寫，無法變更
                // setCounts(counts + 1);
                // console.log(counts);
            }}>點擊次數:{counts}</button> */}
            <MyComponent/>
        </div>
    )
}

export default App0818