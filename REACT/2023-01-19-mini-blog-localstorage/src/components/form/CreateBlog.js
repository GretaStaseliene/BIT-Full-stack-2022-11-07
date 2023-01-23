import { useState } from 'react';

const CreateBlog = ({ blogs, setBlogs }) => {
    const [imageUrl, setImageUrl] = useState();
    const [date, setDate] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const handleForm = (e) => {
        e.preventDefault();
        
        // const newBlog = {image: imageUrl, date: date, title: title, content: content};
        // let data;
        // data = [...blogs, newBlog];

        // setBlogs(data);

        // localStorage.setBlogs('blogs', JSON.stringify(data));

        const newBlog = {image: imageUrl, date: date, title: title, content: content};

        blogs.push(newBlog);

        localStorage.setItem('blogs', JSON.stringify(blogs));

        setBlogs([...blogs]);

        e.target.reset();
    }

    return (
        <form className='border rounded p-3 mb-3 mt-4' onSubmit={handleForm}>
            <h2 className='mb-3'>Fill this form to add a new Blog</h2>
            <div className='image input-group mb-2'>
                <label className='me-3 float-start'>Add url link to add image</label>
                <input type="url" className='form-control rounded float-end' onChange={ (e) => setImageUrl(e.target.value) } />
            </div>
            <div className='date input-group mb-2'>
                <label className='me-3 float-start'>Add Date</label>
                <input type='date' className='form-control rounded float-end'  onChange={ (e) => setDate(e.target.value) } />
            </div>
            <div className='blog-content mb-2'>
                <div className='blog-title input-group mb-2'>
                    <label className='me-3 float-start'>Add Blog's Title</label>
                    <input type='text' className='form-control rounded float-end'  onChange={ (e) => setTitle(e.target.value) } />
                </div>
                <div className='blog-content input-group mb-2'>
                    <label className='me-3 float-start'>Add content</label>
                    <textarea className='form-control rounded float-end'  onChange={ (e) => setContent(e.target.value) } />
                </div>
            </div>
            <button className='btn btn-primary'>Add new Blog</button>
        </form>
    );
}

export default CreateBlog;