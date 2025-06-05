import { useState } from 'react';
import { useEffect } from 'react';

const Blogs = () => {
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
        </div>
    );
};

export default Blogs;