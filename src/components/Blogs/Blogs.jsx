import { useState } from 'react';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error)); 
    }, []);

    return (
        <div className='w-2/3'>
            <h1 className='text-4xl'>Blogs:{blogs.length}</h1>
            {
                blogs.map(blog =><Blog
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;