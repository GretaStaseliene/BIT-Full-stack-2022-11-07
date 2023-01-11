import Blogs from '../blog/Blog';

const blogas = Blogs.map(res => {
    return (
        <div className="blog-div">
            <div className="single-blog">
                <div className="image-div">
                    <img src={res.image} alt="" />
                    <span className="category">{res.category}</span>
                </div>
                <div className="blog-info">
                    <span className="date">{res.date} / </span>
                    <span className="comments">{res.comments} comments</span>
                </div>
                <div className="blog-content">
                    <h5>{res.title}</h5>
                    <p className="content">{res.content}...</p>
                    <p className="continue-reading">Continue reading →</p>
                </div>
            </div>
        </div>
    );
})

function Post() {
    return (
        <div className="container">
            { blogas }
        </div>
    );
}

export default Post;