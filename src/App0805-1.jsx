import './css/app0805-1.css'
function App() {
    // return (  return只能單個語法
        // 把html的段落放在fragment的空標籤裡，才能讀，不然只能寫一個區塊
        // <>
        // {/* 在react要多寫函式才能觸發 */}
        //     <button type="button" onClick={()=>{
        //         alert('Hello')
        //     }}>按鈕</button>
        // </>
    // 一般變數
    const myName="安迪"
    // 屬性名稱變數
    const myClassName="myclass"
    // 方法1：把函式寫在外面
    function myClick(){
        alert('我是按鈕1');
    }
    return (
        <>
        <div>
            {/* react的style要在裡面多加一個大括號，才能執行 */}
            <p style={{fontSize:"28px"}} className={myClassName}>姓名：{myName}</p>
            <button type="button" onClick={myClick}>按鈕1</button>
            {/* 方法2：把函式寫在onClick裡 */}
            <button type="button" onClick={()=>{
                alert('我是按鈕2')
            }}>按鈕1</button>
        </div>
        </>

    )
}
export default App;