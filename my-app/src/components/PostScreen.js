import React from 'react'
import '../Css/posts.css'
import { IconButton, Avatar } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import UserPosts from './UserPosts';

const ActivityScreen = ({ Icon, title }) => {
    return (
        <div className='activity__Item'>
            <Icon fontSize='large' />
            <h3>{title}</h3>
        </div>
    )
}

function PostScreen() {
    return (
        <div className='posts'>
            <div className='posts__container'>
                <div className='user__thoughts'>
                    <IconButton className='iconbutton'>
                        <Avatar fontSize='large' />
                    </IconButton>
                    <input placeholder="Whats's On your Mind?" />
                </div>
                <div className='activity__Container'>
                    <ActivityScreen Icon={VideoCallIcon} title={'Live Video'} />
                    <ActivityScreen Icon={PermMediaIcon} title={'Photo/Video'} />
                    <ActivityScreen Icon={InsertEmoticonIcon} title={'Feeling/Activity'} />
                </div>
            </div>
            <UserPosts />
            <UserPosts />
        </div>
    )
}

export default PostScreen
