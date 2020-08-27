import React, {useEffect, useState} from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';

function Chat() {
    const [input, SetInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if(roomId) {
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomName
            (snapshot.data().name));
            
            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>> ', input);
        
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        SetInput('');
    };

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className='chat_headerInfo'>
                    <h3>{roomName}</h3>
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
                {messages.map(message => (
                    <p className={`chat_message ${true && 'chat_reciever'}`}>
                        <span className='chat_name'> {message.name} </span>
                            {message.message}
                        <span className='chat_timestamp'> 
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
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
