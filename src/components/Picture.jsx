import "../css/picture.css"

const Picture = ({data}) => {
  // console.log(data);
  return (

    <div className="picture">
      <p>picture</p>
      <p>{data.photographer}</p>
      <div className='imgContainer'>
        <img src={data.src.large} alt="" />
      </div>
      Download Image:
      <a href={data.src.large} target='_blank'>Click Here</a>
    </div>
  )
}

export default Picture