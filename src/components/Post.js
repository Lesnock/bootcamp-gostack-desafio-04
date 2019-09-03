import React from 'react';

// Components
import Comment from './Comment'

function PostHeader ({ name, date, avatar }) {
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

function PostContent ({ content }) {
    return <div className="content">{content}</div>
}

export default function Post ({ name, date, content, comments, avatar }) {
    return (
        <div className="post">
            <PostHeader name={name} date={date} avatar={avatar}></PostHeader>
            <PostContent content={content}></PostContent>

            {comments.map(comment => (
                <Comment key={comment.id} comment={comment}></Comment>
            ))}
        </div>
    )
}
