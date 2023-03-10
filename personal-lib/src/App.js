import { useEffect, useState, useRef } from 'react'
import { storage } from './firebase'
import { ref, uploadBytes, listAll, getDownloadURL, refFromURL, deleteObject } from 'firebase/storage'
import { v4 } from 'uuid'
import './App.css'

function App() {
  const [img, setImg] = useState(null);
  const [imgList, setImgList] = useState([]);
  const imgListRef = useRef([]);

  const uploadImage = () => {
    if (img == null) return;
    const imgRef = ref(storage, `pony/${img.name + v4()}`);
    uploadBytes(imgRef, img).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgList((prev) => [...prev, url]);
      });
    });
    setImg(null);
  };

  useEffect(() => {
    listAll(ref(storage, `pony/`)).then((response) => {
      const promises = response.items.map((item) => {
        return getDownloadURL(item);
      });
      Promise.all(promises).then((urls) => {
        imgListRef.current = urls;
        setImgList(urls);
      });
    });
  }, []);

  const setImgLis = (urls) => {
    if (imgListRef.current.length !== urls.length) {
      imgListRef.current = urls;
      setImgLis(urls);
    }
  };

  const deleteImage = (url) => {
    const imgRef = refFromURL(url);
    deleteObject(imgRef).then(() => {
      const updatedImgList = imgList.filter((imgUrl) => imgUrl !== url);
      imgListRef.current = updatedImgList;
      setImgList(updatedImgList);
    });
  };

  return (
    <div className="App">
      <input type='file' onChange={(event) => {setImg(event.target.files[0])}}/>
      <button onClick={uploadImage} >Upload image</button>
      {imgList.map((url) => {
        return (
          <div key={url}>
            <img src={url} />
            <button onClick={() => deleteImage(url)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
