import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
            <Avatar />
                <div className='sidebar_headerRight'>
                    <DonutLargeIcon />
                    <ChatIcon />
                    <MoreVertIcon />
                </div>
            </div>

            <div className='sidebar_search'>

            </div>

            <div className='sidebar_chats'>
                
            </div>
        </div>
    );
}

export default Sidebar;
