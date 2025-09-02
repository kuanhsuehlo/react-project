import React, { useState } from 'react'

const App0818d = () => {
    const [txt, setTxt] = useState('');
    // 建立下拉式清單項目
    const opList=['HTML','CSS','Javascript','React'];
    // 建立下拉式清單內容
    const opListValue=['html','css','js','react']
    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2><hr />
            <p>目前被選擇項目:{txt}</p>
            <select
                name="selection"
                id=''
                value={txt}
                onChange={(e) => {
                    setTxt(e.target.value);
                }}>
                {/* disabled=>失能 */}
                <option value="" disabled>請選擇</option>
                {/* 使用陣列 */}
                {
                    opList.map((item,index)=>{
                        return <option key={item} value={opListValue[index]}>{item}</option>
                    })
                }

                {/* <option value="html">html</option>
                <option value="css">css</option>
                <option value="javascript">javascript</option> */}
            </select>
        </div>
    )
}

export default App0818d