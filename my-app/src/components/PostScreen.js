import React from 'react'
import '../Css/posts.css'
import { IconButton, Avatar } from '@material-ui/core';

function PostScreen() {
    return (
        <div className='posts'>
            <div className='posts__container'>
                <div className='user__thoughts'>
                    <Avatar />
                    <input placeholder="Whats's On your Mind?" />
                </div>
            </div>
        </div>
    )
}

export default PostScreen
