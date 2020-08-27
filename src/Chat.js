import React, {useEffect, useState} from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [input, SetInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>> ', input);

        SetInput('');
    };

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className='chat_headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last seen at..</p>
                </div>

                <div className='chat_headerRight'>
                    <IconButton >
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton >
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className='chat_body'>
                <p className={`chat_message ${true && 'chat_reciever'}`}>
                    <span className='chat_name'> Adwiteeya </span>
                    Hey buddy!
                    <span className='chat_timestamp'>4:19pm</span>
                </p>
                <p className={`chat_message ${true}`}>
                    <span className='chat_name'> xyz </span>
                    Hey buddy!
                    <span className='chat_timestamp'>4:20pm</span>
                </p>
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input 
                        value={input} 
                        onChange={e => SetInput(e.target.value)} 
                        placeholder="Type a message" 
                        type='text' />
                    <button onClick={sendMessage} type='sumit'>Send a message</button>
                </form>
                <MicIcon />

            </div>
        </div>
    )
}

export default Chat; 
