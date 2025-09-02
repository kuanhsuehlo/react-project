import { useState } from 'react'
// 導入form的元件
import CreateForm from './CreateForm'
import Todo from './Todo'

// 元件區
const TodoWrapper = () => {
    // 因為有N個Todo，所以要用陣列存取
    // const [todos,setTodos]=useState(['繳停車費','對發票']);
    // 因為陣列內容諾有增減時，索引值會異動，所以避免異動資料時，造成索引值錯亂，將陣列改為陣列物件
    // 而key值用亂數來產生

    // 因為要判定todo內容是否被點擊，所以增加一個isCompleted屬性
    // 因為要判定todo內容是否修改，所以

    const [todos, setTodos] = useState(
        [
            { content: '繳停車費', id: Math.random(), isEnd: false, isEdit: false },
            { content: '對發票', id: Math.random(), isEnd: false, isEdit: false },
        ]
    );

    // 建立刪除Todo
    // 傳入被刪除的todo.id
    const delTodo = (id) => {

        setTodos(todos.filter((todo) => {
            // 使用filter方法，保留不適被刪除的id
            return todo.id !== id
        }))
    }

    const toggleCompleted = (id) => {
        // 建立切換isEnd屬性函式
        // 檢查被點擊的項目 id 是否跟陣列中的id一樣
        // yes => 1.取出todo 2. 將isEnd屬性值反向(Not)
        // no => 不變

        setTodos(todos.map((todo) => {
            return todo.id === id
                // 其餘運算子
                ? { ...todo, isEnd: !todo.isEnd }
                : todo
        }))

        // 建立切換isEdit屬性函式
    }

        const toggleIsEdit = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id
                // 其餘運算子
                ? { ...todo, isEdit: !todo.isEdit }
                : todo
        }))


    }


    return (
        <div className='wrapper'>
            <h1>待辦事項</h1>
            {/* 方法1 */}
            <CreateForm todos={todos} setTodos={setTodos} />

            {/* 方法2 */}
            {/* 表單的原件在加入來做呼叫 */}
            {/* <CreateForm addTodo={(newContent) => {
                // 建立新的todo內容
                // 使用...其餘運算子來保留原陣列的內容
                // 再加上新的物件內容
                setTodos([...todos, { content: newContent, id: Math.random(), isEnd:false }])
            }} /> */}
            {/* js語法要加大括號很像<script> */}
            {
                todos.map((todo) => {
                    return <Todo todo={todo} key={todo.id} 
                    delTodo={delTodo} 
                    toggleCompleted={toggleCompleted}
                    toggleIsEdit={toggleIsEdit}
                    />
                })
            }
        </div>
    )
}

export default TodoWrapper