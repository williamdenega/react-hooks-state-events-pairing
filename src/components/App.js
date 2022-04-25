import React, {useState} from 'react'
import video from "../data/video.js";
import Comments from './comments.js'
function App() {
  console.log("Here's your data:", video);
  
  const [likes,setLikes] = useState(video.upvotes)
  const [dislikes, setDisLikes] = useState(video.downvotes)
  const [showComments,setShowComments] = useState(true)

  const handleClick = ()=>{
    setShowComments((showComments)=> !showComments)
  }

  const updateLikes = ()=>{
    setLikes((likes) => likes+1)
  }

  const updateDislikes = ()=>{
    setDisLikes((dislikes) => dislikes+1)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>React Today and Tomorrow and 90% Cleaner React with Hooks</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button value={likes} onClick={updateLikes}>{likes} 👍</button><button value={dislikes} onClick ={updateDislikes}>{dislikes} 👎</button>
      <br/>
      <button onClick={handleClick}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
      <hr/>
      {showComments ? <Comments comments={video.comments}/> : null }
    </div>
  );
}

export default App;
