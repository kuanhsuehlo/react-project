// import React from 'react'
import '../css/app0806-1.css'

const App = () => {
    // 資料抽離
    const photos = {
        photo1: {
            imgURL: 'https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '家具',
            desc: "各式各樣的家具",
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo2: {
            imgURL: 'https://images.unsplash.com/photo-1754318090437-2bc4378a90e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '風景',
            desc: '度假的海邊聖地',
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1754318090437-2bc4378a90e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo3: {
            imgURL: 'https://images.unsplash.com/photo-1754318099560-9d89d608d331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '風景',
            desc: '度假的海邊第二景點',
            btnName: '圖片來源',
            btnURL: 'https://images.unsplash.com/photo-1754318099560-9d89d608d331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <img src={photos.photo1.imgURL} className="card-img-top" alt="圖片" />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn btn-primary">{photos.photo1.btnName}</a>
                    </div>
                </div>
                <div className="card">
                    <img src={photos.photo2.imgURL} className="card-img-top" alt="圖片" />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn btn-primary">{photos.photo2.btnName}</a>
                    </div>
                </div>
                <div className="card">
                    <img src={photos.photo3.imgURL} className="card-img-top" alt="圖片" />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn btn-primary">{photos.photo3.btnName}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App