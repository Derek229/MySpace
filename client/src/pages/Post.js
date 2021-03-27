import {useLocation, Link} from "react-router-dom"

const Post = (props) =>{
  const {post} = useLocation()

  return(
    <div>
      <Link to='/'>back</Link>
      <h1>{post.body}</h1> 
    </div>
  )
}

export default Post