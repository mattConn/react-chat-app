import React from 'react'

const Message = (props) => (
    <div className="message" style={{border: "solid 1px"}}>
        <p>{props.senderName}</p>
        <p>{props.date} {props.time}</p>
        <p>{props.content}</p>
    </div>
)

export default Message