

const BookmarkSingle = ({bookmarks}) => {
    console.log(bookmarks)
    return (
        <div className="">
            <h2 className="text-sm p-4 px-4 bg-slate-300 rounded-md text-center w-3/4 mt-2 mx-auto ">bookmarks: {bookmarks.title}</h2>
            
        </div>
    );
};

export default BookmarkSingle;