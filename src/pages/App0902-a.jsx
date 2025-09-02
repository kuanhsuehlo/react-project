import React, { useMemo, useState } from 'react'

// useMemo
const App = () => {
    // 表格資料
    // 順序3
    const arrProd = [
        {
            id: 1,
            prodName: '筆電',
            prodPrice: 80,
            prodImgURL: './images/p1.jpg',
        },
        {
            id: 2,
            prodName: '人物1',
            prodPrice: 120,
            prodImgURL: './images/p2.jpg',
        },
        {
            id: 3,
            prodName: '街景',
            prodPrice: 200,
            prodImgURL: './images/p3.jpg',
        },
        {
            id: 4,
            prodName: '自拍視角',
            prodPrice: 160,
            prodImgURL: './images/p4.jpg',
        },
        {
            id: 5,
            prodName: '人物2',
            prodPrice: 120,
            prodImgURL: './images/p5.jpg',
        }
    ]
    // 表格元件
    // 順序1
    const ProdTable = ({ ascFilterProds }) => {
        return (
            <table style={{ width: '500px', marginTop: '20px' }}>
                <tbody>
                    {/* jsx中 */}
                    {
                        // 把ascFilterProds加在迴圈，原本是arrprod的資料
                        ascFilterProds.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td
                                        style={{
                                            borderBottom: '1px dashed #ccc',
                                            padding: '5px',
                                            width: '100px',
                                        }}>{prod.prodName}</td>
                                    <td style={{
                                        borderBottom: '1px dashed #ccc',
                                        padding: '5px',
                                        width: '300px',
                                    }}>
                                        <img src={prod.prodImgURL} alt="圖片資料" style={{ width: '120px' }} />
                                    </td>
                                    <td style={{
                                        borderBottom: '1px dashed #ccc',
                                        padding: '5px',
                                        width: '100px',
                                    }}>{prod.prodPrice}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        )
    }

    // 陣列變數，預設為原商品陣列資料
    const [prods, setProds] = useState(arrProd)
    // 排序變數，預設為遞增
    const [ascending, setAscending] = useState(true)
    // 搜尋變數，預設為空字串
    const [search, setSearch] = useState('')

    // 建立排序與搜尋的函式
    const ascFilterProds = useMemo(() => {
        // 其餘運算子
        return [...prods]
            // 遞增和遞減
            .sort((a, b) => {
                // 利用三元運算子做判斷
                return ascending ? a.prodPrice - b.prodPrice : b.prodPrice - a.prodPrice
            })
            // 搜尋
            // 陣列中的每筆資料單獨出來，在return裡回傳時用.match確認
            // 保留關鍵字的內容
            .filter((prod) => {
                return prod.prodName.match(search);
            })
    }, [ascending, search])
    return (
        <div className='wrap'>
            排序：
            <input
                type="checkbox"
                // 邦定排序變數
                checked={ascending}
                // 當checkbox有異動時，更新排序變數
                onChange={(e) => { setAscending(e.target.checked) }}
            />
            <br />
            搜尋：
            <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
            />

            {/* 表格 */}
            {/* 順序2 */}
            {/* ascFilterProds為屬性 */}
            <ProdTable ascFilterProds={ascFilterProds} />
        </div>
    )
}

export default App