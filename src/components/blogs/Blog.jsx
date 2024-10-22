import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../singleBlog/SingleBlog";


const Blog = ({bookmarksHandle, readingHandle}) => {


    const [blog, setBlog] = useState([]);


    useEffect( ()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlog(data))

    },[])

    return (
        <div className="md:w-2/3">

            <h1 className="text-4xl">Blogs: {blog.length}</h1>

            {
                blog.map(blog => <SingleBlog
                    
                    key={blog.id}
                     blog={blog}
                     bookmarksHandle={bookmarksHandle}
                     readingHandle={readingHandle}
                     ></SingleBlog>)
            }
            
        </div>
    );
};

export default Blog;