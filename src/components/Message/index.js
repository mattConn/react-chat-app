import React from 'react'

import './index.scss';

const Message = (props) => (
    <div className="message">
        <div className="nameAndTimestamp">
            <p className="senderName">{props.senderName}</p>
            <p className="dateAndTime">
                <span className="date">{props.date}</span>
                <span className="at">@</span>
                <span className="time">{props.time}</span>
            </p>
        </div>

        <p>{props.content}</p>
    </div>
)

export default Message