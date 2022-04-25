import React,{useState} from 'react'

const Comment = ({comment}) => {

    const [liked,setLike] = useState(false)

    let likedStyle = {
       // backgroundColor:'#f44336'
       backgroundColor:"red"
    }
    let unlikedStyle = {
        backgroundColor:'white'
    }

    const isClicked = ()=>{
        setLike((liked)=> !liked)
    }

  return (
    <div>

        <h1>{comment.user}</h1>
        <p>{comment.comment}</p>
        <button style={liked ? likedStyle : unlikedStyle} id={comment.id} onClick={isClicked}>{liked ? 'LIKED 👍' : 'LIKE'}</button>

    </div>
  )
}
export default Comment