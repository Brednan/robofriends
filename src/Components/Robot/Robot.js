import React, {useState} from "react"
import Styled from "./Robot.module.css"

const Robot = (props) =>{
    
    const url_Src = "https://robohash.org/" + props.username

    return(
        <div className={Styled.Card}>
            <h1 className={Styled.labeled}>Name:</h1> <p>{props.name}</p>
            <h1 className={Styled.labeled}>User Name:</h1> <p>{props.username}</p>
            <h1 className={Styled.labeled}>Email:</h1> <p>{props.email}</p>
            <img src={url_Src} style={{width: "200px", height:"180px", position: "relative", left: "50px", top: "-23px"}}/>
        </div>)
}

export default Robot