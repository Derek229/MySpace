import axios from "axios"
import { useState } from "react"
import {useLocation, Link} from "react-router-dom"
import { Button } from "semantic-ui-react"

const Post = (props) =>{
  const {post} = useLocation()
  const [ posts, setPosts ] = useState([])

  //  /api/posts/:id
  const deletePost = async (id)=>{
    let res = await axios.delete(`/api/posts/${id}`)
    const postsRemain = posts.filter(x => x.id !==id)
    setPosts(postsRemain)
  }


  // const deletePost = async (id) => {
  //   try {
  //     let res = await axios.delete(`/api/posts/${id}`)
  //     window.location.reload()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return(
    <div>
      <Link to='/'>back</Link>
      <h1>{post.body}</h1> 
      <Button onClick ={()=> deletePost(post.id)}>Delete</Button>
    </div>
  )
}

export default Post