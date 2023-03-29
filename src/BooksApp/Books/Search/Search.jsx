import React from "react";
import c from './Search.module.css'
import Selects from "./Selects/Selects";
import Preloader from "../../../assets/Preloader/Preloader";
const Search = (props) => {
    console.log(props)
    return (
        <div className={c.search}>

            <div className={c.title}>
                Treasure
                <div className={c.subtitle}>read. learn. Act</div>
                 </div>

            <form >
                <textarea placeholder="select a specific category if possible..." required maxLength={57}
                       onKeyPress={(e)=>
                        {if (e.key === 'Enter'){props.onButton(); e.preventDefault()}}}
                        value={props.newBooksText}
                        onChange={props.changeSearchText}/>

                    <button onClick={props.onButton} type="button" className={c.SButton}> {">"} </button>
            </form>


            <Selects selectCategory = {props.selectCategory} selectSortBy = {props.selectSortBy}/>
            <hr className={c.hr}/>


            {props.isFetching && props.resultsCount === null?<div className={c.preloader}><Preloader/></div>:
                props.resultsCount===null?null:
                <p className={c.results}>results: {props.resultsCount}</p>}
        </div>
    )
}

export default Search
