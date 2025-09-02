import React, { useState } from 'react'

const App0819c = () => {
    const[curImg,setCurImg]=useState(2);
    // 圖片陣列
    const arrPhotos=[
        "./public/images/p1.jpg",
        "./public/images/p3.jpg",
        "./public/images/p5.jpg",
        "./public/images/p7.jpg"
    ]
  return (
    <div>
        <h1>小圖換大圖</h1><hr />
        <div>
            <div>
                {
                    arrPhotos.map((photo,index)=>{
                        return (
                            <img
                            ket={index}
                             src={photo} 
                             alt="" />
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default App0819c