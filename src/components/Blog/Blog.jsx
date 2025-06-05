import PropTypes from 'prop-types';
import { BsBookmarkStar } from "react-icons/bs";

const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {
    const {title, cover,reading_time, author, author_img, posted_date, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture of the title ${title}`}></img>
            <div className="flex justify-between items-center">
                <div className='flex'>
                    <img className='w-14 rounded-4xl' src={author_img} alt="Author Picture" />
                    <div className='ml-4'>
                        <h3 className="text-2xl">{author}</h3>
                        <p className="text-gray-500">{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time}min read</span>
                    <button 
                    onClick={() => handleAddToBookmark (blog)}
                    className='ml-2 text-2xl'><BsBookmarkStar /></button>
                </div>
            </div>
            <h2 className="text-4xl my-4">{title}</h2>
            <p>{
            hashtags.map((hash,idx) => <span key={idx}><a href="">{hash} </a></span>)}</p>
            <button
            onClick={() => handleReadingTime(reading_time)}
            className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Blog;