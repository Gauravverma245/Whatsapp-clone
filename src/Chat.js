import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import {useState, useEffect} from 'react';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@mui/icons-material';
import { useParams } from 'react-router';
import db from './firebase';


function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() =>{
        if(roomId){
            db.collection('rooms').doc(roomId).
            onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log('You typed', input);

        setInput("");
    }

    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen...</p>
                </div>

                <div className="chat__headerRight">
                <IconButton><SearchOutlined/></IconButton>
                <IconButton><AttachFile/></IconButton>
                <IconButton><MoreVert/></IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                    <span className="chat__name">Gaurav Verma</span>
                    Hey guys
                    <span className="chat__timestamp">3:50 pm</span>
                </p>
                
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input onChange = {e => setInput(e.target.value)} value={input} type ="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <Mic/>
            </div>
            
        </div>
    )
}

export default Chat
