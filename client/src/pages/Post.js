import axios from "axios"
import { useEffect, useState } from "react"
import {useLocation, Link} from "react-router-dom"
import { Button } from "semantic-ui-react"

const Post = (props) =>{
  const {post} = useLocation()
  const [ posts, setPosts ] = useState()

  //  /api/posts/:id



  useEffect(()=>{
    getPosts()
  }, [])

  const getPosts = async () => {
    try{
    let res = await axios.get(`/api/posts`)
    setPosts(res.data)
    }catch(err){
      alert('Items error, check console/rails terminal')
    }
  }


  
  const deletePost = async (id)=>{
    // debugger
    await axios.delete(`/api/posts/${id}`)
    const postsRemain = posts.filter(x => x.id !== id)
    setPosts(postsRemain)
  }

  


  // const deleteVaccineClickHandler = async ()=>{
  //   try{
  //   // axios call to delete
  //   let res = await axios.delete(`/api/bugs/${bugId}/vaccines/${id}`)
  //   console.log(res)
  //   // than call to update UI
  //   deleteVaccine(id)
  //   } catch(err){
  //     alert('err')
  //   }
  // }

  // const deletePost = async (id) => {
  //   try {
  //     let res = await axios.delete(`/api/posts/${id}`)
  //     window.location.reload()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }    <Link to={`/bugs/${bugId}/vaccines/${id}/edit`}>    /api/posts/:id

  return(
    <div>
      <Link to='/'>back</Link>
      <h1>{post.body}</h1> 
      <Button onClick ={()=> deletePost(post.id)}>Delete</Button>
      <Link to ='/api/updatePost'>Edit</Link>
    </div>
  )
}

export default Post