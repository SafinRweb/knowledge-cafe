// import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs.jsx';
import Bookmarks from './components/Bookmarks/Bookmarks.jsx';
import Header from './components/Header/Header.jsx';


function App() {
  return (
    <>
      <Header></Header>
      <main className='md:flex '>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
      
    </>
  );
}

export default App;