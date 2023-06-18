import "./Form.css";


export default function Form({setName, setPost, name, post, setToogleTrigger}) { 

  function handleSubmit(e){
    e.preventDefault();
    setToogleTrigger(true)
}



  return (
    <div className="form_field">
      <form onSubmit={handleSubmit} className="form_">
        <label htmlFor="name">Name:</label>
        <input type="text" maxLength="30" value={name} onChange={(e) => {setName(e.target.value)}}></input>
        <label htmlFor="post">Post:</label>
        <textarea
          name="text-post"
          maxLength="144"
          className="post_"
          cols="40"
          rows="5"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <div className="submit-btn">
          <input type="submit" value="Send post"></input>
        </div>
      </form>
    </div>
  );
}
