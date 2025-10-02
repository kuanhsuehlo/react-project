import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {
    // 檢測是連上api
    // 

    const api = "api網址"
    const accessKey = "位置"
    const [filterString, setFilterString] = useState('cafe');

    // 建立非同步方法，取得遠端資料
    const getPhotots=async()=>{
        console.log(`${api}?client_id=${accessKey}&query=${filterString}`)
        // 發出請求給遠端 api，傳回結果
        const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`)
        // 全部資料
        console.log(result);
    }
  return (
    <div>App0908-api-unsplash</div>
  )
}

export default App