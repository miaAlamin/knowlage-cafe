import BookmarkSingle from "../BookMarkSingle/BookmarkSingle";


const Bookmarks = ({bookmarks, reading}) => {
    
    return (
        <div className="md:w-1/3 bg-slate-200 mt-9 rounded-md ml-4">
            <div>
                <h1 className="text-2x text-center mt-2">Reading Time: {reading} min</h1>
            </div>
            <h2 className="text-2xl text-center py-2">Bookmarks: {bookmarks.length}</h2>

            {
                // eslint-disable-next-line react/prop-types
                bookmarks.map((bookmarks, index) => <BookmarkSingle key={index} bookmarks={bookmarks}></BookmarkSingle>)
            }
         
         
        </div>
    );
};

export default Bookmarks;