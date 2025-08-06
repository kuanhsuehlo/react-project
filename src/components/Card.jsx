import React from 'react'

const Card = ({imgURL,title,desc,btnName,btnURL}) => {

    // 元件的參數稱為屬性
    // 解構=>把元件
    // const {imgURL,title,desc,btnName,btnURL} = props;

    // 這是一個一個製作元件
    // const {imgURL} = props;
    // const {title} = props;
    // const {desc} = props;
    // const {btnName} = props;
    // const {btnURL} = props;


    return (
        <div className="card">
            <img src={imgURL} className="card-img-top" alt="圖片" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={btnURL} className="btn btn-primary">{btnName}</a>
            </div>
        </div>
    )
}

export default Card