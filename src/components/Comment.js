import React from 'react'

export default function Comment ({ comment }) {
    return (
        <div className="comment">
            <img src={comment.author.avatar} alt="avatar"/>
            <div className="content"><span className="name">{comment.author.name}</span> {comment.content}</div>
        </div>
    )
}