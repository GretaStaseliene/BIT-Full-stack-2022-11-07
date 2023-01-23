const Blogs = ( {blog, blogs, setBlogs, index} ) => {

    const handleDelete = (index) => {
        blogs.splice(index, 1);
        const data = [...blogs];
        setBlogs(data);
        localStorage.setItem('blogs', JSON.stringify(data));
      }

    const formatDate = () => {
        const date = new Date(blog.date.split(' ')[0]);

        return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', day: 'numeric' } );
      }

    return (
        <div className='col-4 single-blog mb-3'>
            <div className='image-div'>
                <img src={blog.image} alt={blog.title} />
                <span className='category'>{blog.category}</span>
            </div>
            <div className='blog-info'>
                <span className="date">{formatDate()}</span>
                <span className='separator'>/</span>
                <span className="comments">{blog.comments} comments</span>
            </div>
            <div className='blog-content'>
                <h5 className='fw-semibold'>{blog.title}</h5>
                <p className="content">{blog.content}</p>
                <a href={blog.link} className="continue-reading">Continue reading →</a>
            </div>
            <button className="btn btn-danger btn-sm mt-2" onClick={() => handleDelete(index)}>Delete Blog</button>
        </div>
    );
}

export default Blogs;