
import './App.css'
import Header from './components/headers/Header'
import Blog from './components/blogs/blog'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
import BookmarkSingle from './components/BookMarkSingle/BookmarkSingle'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [reading, setReading] = useState(0);



  const bookmarksHandle = Books =>{

    const newBookmark = [...bookmarks, Books];
    setBookmarks(newBookmark);
  }

  const readingHandle = read =>{
    
    setReading(reading + read);


  }


  return (
    
    <>
    
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
          <Blog bookmarksHandle={bookmarksHandle}  readingHandle={readingHandle}></Blog>
          <Bookmarks bookmarks={bookmarks} reading={reading}></Bookmarks>
      </div>

    
      
   
    </>
  )
}

export default App
