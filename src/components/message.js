import React from 'react'

const Message = (props) => (
    <div className="message" style={{border: "solid 1px"}}>
        <p>{props.senderID}</p>
        <p>{props.timestamp}</p>
        <p>{props.content}</p>
    </div>
)

export default Message