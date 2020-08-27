import React, {useEffect, useState} from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState("");
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/female/${seed}.svg`} />
            <div className='sidebarChat_info'>
                <h2>Room Name</h2>
                <p>Last message...</p>
            </div>
        </div>
    )
}

export default SidebarChat
