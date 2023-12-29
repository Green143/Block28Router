import { Link, useParams } from "react-router-dom";

const SinglePost = ({posts}) => {
 const params= useParams()
 const id = params.id*1
  //map the users
    const post= posts.find((post) =>{
        return post.id=== id
    })
    if (!post) {return null}

   return(
    <div>
        <h1>{post.title}</h1>
        <Link to='/posts'> Back to All Posts </Link>
    </div>
   )
};

export default SinglePost
