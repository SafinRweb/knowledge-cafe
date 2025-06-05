import { FcReading } from "react-icons/fc";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-100 ml-2 pt-2'>
            <div className="text-center mb-4 bg-gray-800 text-white p-4 rounded-xl">
                <he className="text-4xl">Reading time: {readingTime}</he>
            </div>
            <h2 className='text-3xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => (
                    <div key={bookmark.id} className='bg-gray-300 p-4 m-4 rounded-xl'>
                        <h3 className='text-2xl'>{bookmark.title}</h3>
                        <p>{bookmark.description}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Bookmarks;