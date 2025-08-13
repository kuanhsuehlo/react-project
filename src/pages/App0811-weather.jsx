import '../css/app0811-weather.css'
import { BsUmbrellaFill } from "react-icons/bs";
import React, { useEffect } from 'react'
import axios from 'axios';

const App = () => {
    // useEffect()=>渲染後，指呼叫一次json
    useEffect(() => {
        // 非同步取資料
        (async () => {
            // 取得puclic中json檔
            const data = await axios.get('./json/F-C0032-001.json');

            // 檢查是否連上json檔
            console.log(data.data.cwaopendata.dataset);

            // 取得src中的json檔
        })();
    }, []);

    return (
        <>
            <div className='cards'>
                {/* 取得陣列的資料跑迴圈 */}
                <div className='wheather'>
                    {/* 縣市 */}
                    <h2 className='city'>臺北市</h2>
                    {/* 天氣預報 */}
                    <ul className='info'>
                        <li className='info-item'>
                            <h3>11日</h3>
                            <p>上午6:00<br />~<br />下午6:00</p>
                            {/* 天氣圖：使用執行路徑，所以要將圖片放在PUBLIC資料夾中，才能讀到 */}
                            <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="晴午後短暫雷陣雨" />
                            <p>晴午後短暫雷陣雨</p>
                            <p><BsUmbrellaFill />80%</p>
                        </li>
                        <li className='info-item'>
                            <h3>11日</h3>
                            <p>上午6:00<br />~<br />下午6:00</p>
                            <img src="./weatherIcon/多雲短暫雨.svg" alt="多雲短暫陣雨" />
                            <p>多雲短暫陣雨</p>
                            <p><BsUmbrellaFill />40%</p>
                        </li>
                        <li className='info-item'>
                            <h3>12日</h3>
                            <p>上午6:00<br />~<br />下午6:00</p>
                            <img src="./weatherIcon/多雲午後短暫雷陣雨.svg" alt="晴時多雲午後短暫陣雨" />
                            <p>晴時多雲午後短暫陣雨</p>
                            <p><BsUmbrellaFill />40%</p>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default App