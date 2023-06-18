import Form from "../Form/Form";
import Post from "../Post/Post"
import { useState } from "react";
 
export default function PostField() {

  const [name, setName] = useState('')
  const [post, setPost] = useState('')
  const [shouldShowComponent, setShouldShowComponent] = useState(false);
  const [toogleTrigger, setToogleTrigger] = useState(false) 
  const [posts, setPosts] = useState([])

  
   if(toogleTrigger === true) {
    setShouldShowComponent(true)
    setPosts( (prevPosts) => [...prevPosts, (<Post name={name} post={post} key={Date.now()}/>)])
    setName("")
    setPost("")
    setToogleTrigger(false)
  } 
  
  
 
  return (
    <>
    <div className="posts-area">
      <Form name={name} post={post} setName={setName} setPost={setPost} toogleTrigger={toogleTrigger} setToogleTrigger={setToogleTrigger}/>
      {shouldShowComponent && posts}
    </div>
    </>
  )
} 
