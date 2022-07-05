import { Avatar } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import db from '../firebase';
import './SidebarChat.css';
import { Link } from 'react-router-dom'

const SidebarChat = ({ id, name, addnNewChat }) => {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if (id) {
            db.collection("rooms").doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())))
        };
    }, [id])
    useEffect(() => {
        setSeed(Math.floor(Math.random * 5000));
    }, []);


    const createChat = () => {
        //roomName stores the value we entered. 
        const roomName = prompt("Please Enter Name for chat");

        if (roomName) {
            //do some clever database stuff..
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    return !addnNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>

            </div>
        </Link>
    ) : (
        <div onClick={createChat}
            className="sidebarChat">
            <h2>add new chat</h2>
        </div>
    )
}

export default SidebarChat
