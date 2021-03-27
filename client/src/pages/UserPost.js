import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import useAxios from 'axios-hooks'

const UserPosts = (props)=>{
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getMyPosts()
},[])

const getMyPosts = async()=>{
  try {
    let res = await axios.get('/api/posts')
    setPosts(res.data)
  } catch (error){

  }
}

const [{ data:friendPosts, loading, error}, refetch] = useAxios(
  '/api/friend_posts'
)


const renderPosts = () => {
  return posts.map(post =>{
    return(
      <Link to={{pathname: `posts/${post.id}`, post: post}}>
        <h3>{post.body}</h3>
      </Link>
    )
  })
}


const renderFriendPosts =() =>{
  if (loading) return <p>Loading...</p>
  if  (error) return <p>error!</p>
  return friendPosts.map(post => {
    return(
      <Link to={{pathname: `post/${post.id}`,post: post}}>
        <h3>{post.body}</h3>
      </Link>
    )
  })
}

return (
  <div>
    <p>My Post</p>
    <Link to='posts/new'>
      new post
    </Link>
    {renderPosts()}
    <p>friends post</p>
    {renderFriendPosts()}
  </div>
  )
}

export default UserPosts