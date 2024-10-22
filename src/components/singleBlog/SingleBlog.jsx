import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';

const SingleBlog = ({blog, bookmarksHandle, readingHandle}) => {
    console.log(blog)
    const {cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full rounded-md' src={cover} alt={`cover pictur of the title ${title}`} />

            <div className='flex justify-between items-center'>
                <div className='flex gap-3 mt-6 mb-6 items-center'>
                    <img className='w-16' src={author_img}alt='img'/>
                    <div>
                        <h1 className='text-2xl font-bold'>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time}min read</p>
                    <button
                    onClick={()=> bookmarksHandle(blog)}
                    className="text-2xl"><FaBookmark></FaBookmark></button>
                </div>

            </div>

            <div>
                <h1 className='font-bold text-4xl'>{title}</h1>
            </div>

            <p>
                    {
                        hashtags.map((hash, index) => <span key={index}><a href='#'>#{hash}</a></span>)
                    }
            </p>

            <button className='text-purple-600 underline mt-4' onClick={() => readingHandle(reading_time)}>Mark As Reading</button>


            
        </div>
    );
};


SingleBlog.propTypes = {
    blog: PropTypes.object.isRequired,
    bookmarksHandle: PropTypes.object
}
export default SingleBlog;