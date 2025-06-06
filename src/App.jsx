import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs.jsx';
import Bookmarks from './components/Bookmarks/Bookmarks.jsx';
import Header from './components/Header/Header.jsx';


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }
  const handleReadingTime = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}
        handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
      
    </>
  );
}

export default App;