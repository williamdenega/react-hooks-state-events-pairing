import React from 'react'
import Comment from './comment'

export default function Comments({comments}) {

    const commentsList = comments.map(comment => <Comment comment={comment}/>)




    return (
    <div>
        <h1>{comments.length} Comments</h1>
        {commentsList}
    </div>
  )
}
