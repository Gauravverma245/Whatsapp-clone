import { Avatar } from '@material-ui/core';
import React from 'react'
import './SidebarChat.css'
import {useEffect, useState} from 'react'
import db from './firebase'
import {Link} from 'react-router-dom'

function SidebarChat( {id, name, addNewChat} ) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for Chat");

        if(roomName){
           db.collection("rooms").add({
               name: roomName,
           })
        }


    }
    return !addNewChat ? (
        <Link to = {`/rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>last message...</p>
            </div>
        </div>
        </Link>
        
    ): (
        <div onClick = {createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat;
