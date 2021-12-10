import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import {useState, useEffect} from 'react';
import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';


function Chat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen...</p>
                </div>

                <div className="chat__headerRight">
                <IconButton><SearchOutlined/></IconButton>
                <IconButton><AttachFile/></IconButton>
                <IconButton><MoreVert/></IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message chat__reciever">
                    <span className="chat__name">Gaurav Verma</span>
                    Hey guys
                    <span className="chat__timestamp">3:50 pm</span>
                </p>
                
            </div>

            <div className="chat__footer">
            
            </div>
            
        </div>
    )
}

export default Chat
