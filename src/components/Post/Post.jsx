import './Post.css'

export default function Post({name, post}){
  return(
    <div className="post-field">
      <h4>@{name}</h4>
      <p>{post}</p>
    </div>
  )
}