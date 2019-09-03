import React from 'react';

// Header with avatar, name and date
function Header ({ name, date, avatar }) {
    return (
        <div className="post-header">
            <img src={avatar} className="avatar" alt=""/>
            <div className="text">
                <span className="name">{name}</span>
                <span className="date">{date}</span>
            </div>
        </div>
    )
}

// Post Comment
function Comment ({ comment }) {
    return (
        <div className="comment">
            <img src={comment.author.avatar} alt="avatar"/>
            <div className="content"><span className="name">{comment.author.name}</span> {comment.content}</div>
        </div>
    )
}

export default function Post ({ name, date, content, comments, avatar }) {
    return (
        <div className="post">
            <Header name={name} date={date} avatar={avatar}></Header>
            <div className="content">{content}</div>
            
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment}></Comment>
            ))}
        </div>
    )
}
