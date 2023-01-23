import './App.css';
import { useEffect, useState } from 'react';
import Blogs from './components/blogs/Blogs';
import CreateBlog from './components/form/CreateBlog';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(JSON.parse(localStorage.getItem('blogs')));
  }, []);

  return (
    <>
      <h1>Mano Mini Blog'as</h1>
      <div className='container'>
        <div className='row'>
          {blogs.map((blog, index) => 
            <Blogs blog={blog} key={index} blogs={blogs} setBlogs={setBlogs} index={index} />
          )}
        </div>
      </div>
      <CreateBlog blogs={blogs} setBlogs={setBlogs} />
    </>
  );
}

export default App;
