import React, { useEffect, useState } from 'react'


const CreateForm = ({ todos, setTodos }) => {
    const [content, setContent] = useState('');

    // 建立一個函式處理新增todo的資料
    const addData = () => {
        let myInput = document.getElementById('myInput');
        myInput.focus(); // 指定游標
        if (content.length === 0) {
            alert('沒有輸入代辦內容!請重新輸入')
        } else {
            setTodos([...todos, { content: content, id: Math.random(),isEnd: false, isEdit: false }])
            setContent('')
        }
    }

    return (
        <form className='create-form'>
            <input
                id='myInput'
                type="text"
                placeholder='輸入待辦事項'
                value={content}
                onChange={(e) => {
                    setContent(e.target.value.trim())
                }} />
            <button
            // onClick裡的addData不要加()，會立即被執行
                type="button" onClick={addData}>加入</button> 
        </form>
    )
}



// 表單區的原件
// const CreateForm = ({ addTodo }) => {
//     const [content, setContent] = useState('');


//     return (
//         <form className='create-form'>
//             <input
//                 id='myInput'
//                 type="text"
//                 placeholder='輸入待辦事項'
//                 value={content}
//                 onChange={(e) => {
//                     setContent(e.target.value.trim())
//                 }} />
//             <button
//                 type="button" onClick={() => {
//                     addTodo(content)
//                     setContent('')
//                     let myInput = document.getElementById('myInput');
//                     myInput.focus(); // 指定游標
//                 }}>加入</button>

//             {content}
//         </form>
//     )
// }

export default CreateForm