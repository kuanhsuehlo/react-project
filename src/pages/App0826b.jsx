import React, { useState,useEffect } from 'react'
// import '../css/app0826-b.css'
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: './images/p1.jpg', title: "photo-1" },
        { url: './images/p2.jpg', title: "photo-2" },
        { url: './images/p3.jpg', title: "photo-3" },
        { url: './images/p4.jpg', title: "photo-4" },

    ]


    // 用useEffect來觸發
    useEffect(() => {
        // 每3秒呼叫nextSlide()換下一張圖
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);

        // 每三秒後，移除autoplay，這樣才能取得最新的索引編號
        return () => clearInterval(autoplay);
    }, [currentIndex]);



    // 按鈕竊換
    // 上一張
    // 三元運算子 => 條件 ? 語句1 : 語句2; 判斷式的簡化版
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        )
    }
    // 下一張
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        )
    }

    // 按鈕
    const Arrow = ({ direction, onClick }) => {
        return (
            // 擺放icon的區域
            <div style={{
                position:"absolute",
                top:"50%",
                cursor: "pointer",
                color: "#fff",
                [direction]: "20px",  // 將icon拆開，並且調整左右留白間距
            }}>
                {
                    direction === 'left'
                        ? (
                            // 左按鈕
                            <FaArrowCircleLeft size={50} onClick={onClick}/>
                        )
                        : (
                            // 右按鈕
                            <FaArrowCircleRight size={50} onClick={onClick}/>
                        )
                }
            </div>
        )

    }
    return (
        <>
        <div style={{
            maxWidth: "100vw",
            height:"100vh",
            margin:"0 auto",
        }}>
            <div style={{
                backgroundImage: `url(${slides[currentIndex].url})`,
                widows:"100%",
                height:"100%",
                backgroundSize: "cover",
                margin: 'auto',
            }}>

                {/* h2標題區 */}
                <h2>{slides[currentIndex].title}</h2>
                {/* 上一張 */}
                <Arrow direction="left" onClick={prevSlide}/>
                {/* 下一張 */}
                <Arrow direction="right" onClick={nextSlide}/>

            </div>
        </div>
        </>
    )
}

export default App