import $ from 'jquery'
import { useEffect } from 'react'
import '../css/app0826a.css'

const App = () => {

    useEffect(() => {
        // 當滑鼠碰圖片時，放大圖片
        // 如果使用箭頭函式要使用事件(e)=>{e.currentTarget}
        // 或是最值觀的作法，把this改成.zoom指定的class
        $('.zoom').on('mouseover', function () {
            // addClass jq的指令
            $(this).addClass('imgScale');
        })

        // 當滑鼠離開圖片時,還原圖片
        $('.zoom').on('mouseout', function () {
            // removeClass jq的指令
            $(this).removeClass('imgScale');
        })
    }, [])


    return (
        <>
            <div>
                <h1>useEffect</h1>
                <h2>jquery-圖片縮放</h2>
                <a href="#" className='zoom'>
                    <img src="./images/p1.jpg" alt="" />
                </a>
            </div>
        </>
    )
}

export default App