import React,{useEffect,useState} from 'react'
import './App.css';



function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(res=>res.json())
   .then(data=>setImages(data))
  }, [])
  console.log(images);
  
  return (
    <div className="App">
   
  
    </div>
  );
}

export default App;
