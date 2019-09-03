import React from 'react'

// Styles
import './css/app.css'

// Components
import Header from './components/Header'
import PostList from './components/PostList'

export default function App () {
    return (
        <>
            <Header></Header>
            <PostList></PostList>
        </>
    )
}