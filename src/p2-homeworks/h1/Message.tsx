import React from 'react'
import classes from "./Message.module.css";


type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}



function Message(props: MessagePropsType) {
    // console.log(classes.avatar)
    return (
        <div className={classes.message}>
            <div className={classes.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={classes.textArea}>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div>
                    {props.message}
                    <span className={classes.time}>
                        {props.time}
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Message
