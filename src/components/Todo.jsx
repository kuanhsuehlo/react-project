import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditForm from './EditForm';

// 子元件
const Todo = ({ todo, delTodo, toggleCompleted, toggleIsEdit, editTodo }) => {
    return (
        todo.isEdit ? <EditForm todo={todo} editTodo={editTodo} />
            // 使用三元運算子的方法，控制是否套用css規則
            : <div className={`todo ${todo.isEnd ? 'end' : ''}`}>
                {/* <p>停車費</p> */}
                <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
                <div>
                    <MdEdit
                        style={{ cursor: 'pointer', marginRight: '5px' }}
                        onClick={() => { toggleIsEdit(todo.id) }}
                    />
                    <MdDelete
                        style={{ cursor: 'pointer' }}
                        onClick={() => { delTodo(todo.id) }}
                    />
                </div>
            </div>
    )
}

export default Todo