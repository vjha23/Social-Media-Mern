import React from 'react'
import '../Css/userPost.css'
import { IconButton, Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function UserPosts() {
    return (
        <div className='userPosts'>
            <div className='userScreen'>
                <div>
                    <div className='userDetail'>
                        <IconButton>
                            <Avatar />
                        </IconButton>

                        <div>
                            <h3>Vijay Jha</h3>
                        </div>
                    </div>
                    <div className='captions'>
                        <h5>This is text caption just for testing</h5>
                    </div>

                </div>
                <div className='imageContainer'>
                    <div >
                        <img src='https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='image' className='userImage' />
                    </div>
                </div>
                <div className='likesContainer'>
                    <div className='likeInfo'>
                        <div className='likes1'><p>168 Likes</p></div>
                        <div className='likes1'><p>57 comments</p></div>
                    </div>
                    <div className='commentSection'>
                        <IconButton>
                            <ThumbUpIcon fontSize='large' />
                        </IconButton>
                        <div className='comment'>
                            <input placeholder='Write a comment... ' />
                        </div>
                        <div>
                            <IconButton>
                                <button className='buttonPost'>Post</button>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserPosts
