import { useParams } from "react-router-dom";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function PostiTeenus({postitused}) {
    let {postId} = useParams();
     
    const postData = postitused.find(post => postId === post.id)
    return (
        <div className="home">
            <h1>{postData.title}</h1>
            <img className="postHeaderImage" src={postData.pictureUrl} alt={postData.title} />
            <div>
                {documentToReactComponents(postData.richContent)}
            </div>
            
        </div>
    )

}

export default PostiTeenus