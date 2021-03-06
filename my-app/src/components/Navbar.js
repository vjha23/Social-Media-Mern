import React from 'react'
import '../Css/navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { IconButton, Avatar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__Content'>
                <div className='nav__left'>
                    <EmojiPeopleIcon fontSize='large' />
                    <h2>Connectify</h2>
                </div>

                <div className='IconContainer'>
                    <div className='iconControl'>
                        <div>
                            <HomeIcon style={{ fontSize: '35px' }} />
                        </div>
                        <div>
                            <PeopleAltIcon style={{ fontSize: '35px' }} />
                        </div>
                        <div>
                            <PermMediaIcon style={{ fontSize: '35px' }} />
                        </div>
                        <div>
                            <Avatar />
                        </div>


                    </div>
                </div>

                <div className='navbar__InputContainer'>
                    <SearchIcon />
                    <input placeholder='Search Connectify' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
