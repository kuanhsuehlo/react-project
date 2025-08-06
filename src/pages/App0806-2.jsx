// import React from 'react'
import Card from '../components/Card'
import '../css/app0806-1.css'

// const App = () => 

const arrPhotos = [
    {
        imgURL: 'https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '家具',
        desc: "各式各樣的家具",
        btnName: '圖片來源',
        btnURL: 'https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        imgURL: 'https://images.unsplash.com/photo-1754318090437-2bc4378a90e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '風景',
        desc: "度假的海邊聖地",
        btnName: '圖片來源',
        btnURL: 'https://images.unsplash.com/photo-1754318090437-2bc4378a90e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        imgURL: 'https://images.unsplash.com/photo-1754318099560-9d89d608d331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '風景',
        desc: "度假的海邊第二景點",
        btnName: '圖片來源',
        btnURL: 'https://images.unsplash.com/photo-1754318099560-9d89d608d331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        imgURL: 'https://images.unsplash.com/photo-1754338785183-70cd3cce3d21?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '飯店',
        desc: "住宿地點",
        btnName: '圖片來源',
        btnURL: 'https://images.unsplash.com/photo-1754338785183-70cd3cce3d21?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

const App = () => {
    return (
        <div className='container'>
            {
                arrPhotos.map((photo) => {
                    return (
                        <Card
                            key={photo.id}
                            imgURL={photo.imgURL}
                            title={photo.title}
                            desc={photo.desc}
                            btnName={photo.btnName}
                            btnURL={photo.btnURL}

                        />
                    )
                })
            }
        </div>
    )
}


// 資料抽離
// const photos = {
//     photo1: {
//         imgURL: 'https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         title: '家具',
//         desc: "各式各樣的家具",
//         btnName: '圖片來源',
//         btnURL: 'https://images.unsplash.com/photo-1754373383763-cb8b845de06a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     photo2: {
//         imgURL: 'https://images.unsplash.com/photo-1754318090437-2bc4378a90e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         title: '風景',
//         desc: '度假的海邊聖地',
//         btnName: '圖片來源',
//         btnURL: 'https://images.unsplash.com/photo-1754318090437-2bc4378a90e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     photo3: {
//         imgURL: 'https://images.unsplash.com/photo-1754318099560-9d89d608d331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         title: '風景',
//         desc: '度假的海邊第二景點',
//         btnName: '圖片來源',
//         btnURL: 'https://images.unsplash.com/photo-1754318099560-9d89d608d331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     }
// }

// return (
//     <>
//         <div className="container">
//             <Card 
//                 imgURL={photos.photo1.imgURL}
//                 title={photos.photo1.title}
//                 desc={photos.photo1.desc}
//                 btnName={photos.photo1.btnName}
//                 btnURL={photos.photo1.btnURL}

//             ></Card>

//             <Card 
//                 imgURL={photos.photo2.imgURL}
//                 title={photos.photo2.title}
//                 desc={photos.photo2.desc}
//                 btnName={photos.photo2.btnName}
//                 btnURL={photos.photo2.btnURL}

//             ></Card>

//             <Card 
//                 imgURL={photos.photo3.imgURL}
//                 title={photos.photo3.title}
//                 desc={photos.photo3.desc}
//                 btnName={photos.photo3.btnName}
//                 btnURL={photos.photo3.btnURL}

//             ></Card>
//             </div>
//     </>
// )


export default App