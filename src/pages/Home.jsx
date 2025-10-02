
import Search from '../components/Search'
import Picture from '../components/Picture'
import { useEffect, useState } from 'react'

const Home = () => {
  // 文字方塊內容
  const [input, setInput] = useState('');
  // 資料
  const [data, setData] = useState([]);
  // 目前頁數
  const [page, setPage] = useState(1);
  // 目前查詢內容
  const [curSearch, setCurSearch] = useState('');
  // api key
  const auth = "bNESg9Q0VzJgXeiGLVFjRqtzc1ows8fwkHqiz6E1I9YKtrRp4l5lNtyO";
  // 精選照片連結
  // const intialURL = "https://api.pexels.com/v1/curated?per_page=10&page=1";
  const intialURL = `https://api.pexels.com/v1/curated?per_page=10&page=${page}`;
  // 關鍵字搜尋連結
  // const searchURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=1`;
  const searchURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=${page}`;

  // 取得圖片資料
  const search = async (url) => {

    // 串接api
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    // 取得資料
    const photoData = await dataFetch.json();
    // console.log(photoData);
    setData(photoData.photos);
    // 更改頁數
    setPage(2);
  }

  // 更多圖片
  const morePic = async () => {
    let newURL;
    if (curSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?per_page=10&page=${page}`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${curSearch}&per_page=10&page=${page}`;
    }

    // 串接api
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    // 取得資料
    const photoData = await dataFetch.json();
    // console.log(photoData);
    setData(data.concat(photoData.photos));


    setPage(page + 1);
  }

  // 網頁一進來，就呼叫search函式
  useEffect(() => {
    search(intialURL)
  }, [])

  // curSearch異動時，重新取得圖片
  useEffect(() => {
    if (curSearch === "") {
      // 沒有關鍵字，執行預設連結
      search(intialURL);
    } else {
      search(searchURL);
    }
  }, [curSearch])

  return (
    <div>
      {/* 搜尋 */}
      <Search
        // 按下search按鈕時，將查詢的關鍵字帶入searchURL後，在執型search
        search={() => {
          setCurSearch(input);
        }}
        // 取得文字方塊內容
        setInput={setInput}
      />
      {/* 顯示圖片 */}
      <div className="pictures">
        {
          // 檢查data是否有資料
          // && => 表示有資料
          data &&
          data.map((pic) => {
            return <Picture key={pic.id} data={pic} />
          })
        }

      </div>

      {/* 更多圖片 */}
      <div className='morePictures'>
        <button onClick={morePic}>Learn more</button>
      </div>
    </div>
  )
}

export default Home