
import './App.css'
import Header from './components/headers/Header'
import Blog from './components/blogs/blog'
import Bookmarks from './components/Bookmarks/Bookmarks'


function App() {


  return (
    
    <>
    
      <Header></Header>
      <div className='md:flex'>
          <Blog></Blog>
          <Bookmarks></Bookmarks>
      </div>
      
   
    </>
  )
}

export default App
