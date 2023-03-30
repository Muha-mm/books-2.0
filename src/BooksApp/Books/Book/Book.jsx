import React from "react";
import c from './Book.module.css'
import {NavLink} from "react-router-dom";
import img2 from "./фон3.png"

const Book = (props) => {
    return (
        <div className={c.book} style = {{backgroundImage: `url(${img2})`}}>
            <div className={c.image}>
                <NavLink to={`${props.id}`}>
                    <img src={props.photo === undefined || null ? "shorturl.at/bkntN" : props.photo.thumbnail} alt={"book"}/>
                </NavLink>
            </div>

            <div className={c.info}>
            
            <div className={c.category}>
            {props.subject === undefined ? "not found":
                <NavLink onClick={()=>props.onCategory(props.subject[0])}>
                     {props.subject[0]}
                </NavLink>}
            </div>



                

                <NavLink to={`${props.id}`}>
                    <h2 className={c.name}>
                        {props.title}
                    </h2>
                </NavLink>

                <div className={c.author}>
                    {props.authors}
                </div>
            </div>
        </div>
    )
}

export default Book
