import '../css/app0811-weather.css'
import { BsUmbrellaFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
    // 建立一個react變數，會使用useState Hook
    // 存放各縣市資料
    // const [citys, setCitys] = useState([]);
    const [citys, setCitys] = useState([]);
    // useEffect()=>渲染後，指呼叫一次json
    // 取得渲染後的DOM元素，要寫在useEffect
    useEffect(() => {
        // 非同步取資料
        (async () => {
            // 取得puclic中json檔
            const jsonData = await axios.get('./src/json/F-C0032-001.json');

            // 檢查是否連上json檔
            // console.log(jsonData.data.cwaopendata.dataset);

            // 取的各縣市的氣象資訊(從json資料中解構出來)
            const { location } = jsonData.data.cwaopendata.dataset;
            console.log(location);

            // 透過這個方法把location給citys
            // 將各縣市資料透過setCitys方法，更新citys
            setCitys(location);
        })();
    }, []);

    return (
        <>
            {
                console.log(citys)
            }
            {/* return裡的jsx要加{} */}
            <div className='cards'>
                {/* 取得陣列的資料跑迴圈 */}
                {
                    citys.map((city) => {
                        return (
                            <div key={city.locationName}>
                                {/* 取得陣列名稱 */}
                                <div className='wheather'>
                                    {/* 縣市 */}
                                    <h2 className='city'>
                                        {/* 臺北市 */}
                                        {city.locationName}
                                    </h2>
                                    {/* 天氣預報 */}
                                    <div className='info'>
                                        {
                                            city.weatherElement[0].time.map((item, index) => {
                                                return (
                                                    <div className='info-item' key={index}>
                                                        <h3>
                                                            {/* 11日 */}
                                                            {/* 使用日期時間函示 toLocalString */}
                                                            {
                                                                new Date(item.startTime).toLocaleString(undefined, {
                                                                    day: 'numeric'
                                                                })

                                                            }
                                                        </h3>
                                                        <p>
                                                            {/* 上午6:00<br />~<br />下午6:00 */}
                                                            {/* 開始 */}
                                                            {
                                                                new Date(item.startTime).toLocaleString(undefined, {
                                                                    hour:'numeric',
                                                                    minute:'numeric'
                                                                })

                                                            }
                                                            <br />~<br />
                                                            {/* 結束 */}
                                                            {
                                                                new Date(item.endTime).toLocaleString(undefined, {
                                                                    hour:'numeric',
                                                                    minute:'numeric'
                                                                })

                                                            }
                                                            </p>
                                                        {/* 天氣圖：使用執行路徑，所以要將圖片放在PUBLIC資料夾中，才能讀到 */}
                                                        {/* <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="晴午後短暫雷陣雨" /> */}
                                                        <div>
                                                            <img src={`./weatherIcon/${item.parameter.parameterName}.svg`} alt="晴午後短暫雷陣雨" />
                                                        </div>
                                                        <p>
                                                            {/* 晴午後短暫雷陣雨 */}
                                                            {item.parameter.parameterName}
                                                        </p>
                                                        <div>
                                                            <p><BsUmbrellaFill />
                                                                {/* 80% */}
                                                                {
                                                                // city.weatherElement[4].time[index].parameter.parameterName
                                                                `${city.weatherElement[4].time[index].parameter.parameterName}%`
                                                            }
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

        </>
    )
}

export default App