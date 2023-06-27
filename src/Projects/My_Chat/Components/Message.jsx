import React from "react";
import profile from "../imges/profile-myChat.jpg";
import { useContext,useRef,useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
const Message=(message)=>{
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
  
    const ref = useRef();
  
    useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);
    console.log(message.message.img);

    return (
      <>
        <div
          ref={ref}
          className={`message${
            message.message.senderId === currentUser.uid ? "-owner" : ""
          }`}
        >
          <div className="message-info">
            <img
              src={
                message.message.senderId === currentUser.uid
                  ? currentUser.photoURL
                  : data.user.photoURL
              }
              alt=""
            />
            <span>just now</span>
          </div>
          <div className="message-content">
            {message.message.text && <p>{message.message.text}</p>}
            {message.message.img && (console.log(<img src={message.message.img} alt="" />))}
          </div>
        </div>
      </>
    );
} 

export default Message;