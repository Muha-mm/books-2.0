import React from "react";
import c from './Books.module.css'
import Book from "./Book/Book";
import Search from "./Search/Search";
import MoreBooks from "./MoreBooks/MoreBooks";
import Preloader from "../../assets/Preloader/Preloader";
import booksPng from '../../assets/books.png'

const Books = (props) => {
    let booksElements = props.books.map((b) => {
        return <Book key={b.id} 
                     title={b.volumeInfo.title}
                     authors={b.volumeInfo.authors} 
                     id={b.id}
                     subject={b.volumeInfo.categories}
                     photo={b.volumeInfo.imageLinks}/>
    })

    return (
        <div className={c.booksPage}>
            <Search {...props} />

            <div className={c.waitingPng}>
            {props.resultsCount === null ?
                <div className={c.booksPngDiv}>
                    <img src={booksPng} className={c.booksPng} alt=""/>
                    <div className={c.booksPngText}>waiting to search!</div>
                </div> : null}
            </div>

            <div className={c.books}>
                {booksElements}
            </div>

            <div className={c.moreBooksButton}>
                {(props.isFetching && props.resultsCount !== null) ?
                    <div className={c.preloader}><Preloader/></div> :
                    (props.resultsCount < 30 || props.resultsCount === 0 ||
                        props.resultsCount - props.startIndex < 30) ?
                        null : <MoreBooks onButton={props.onMoreBooksButton}/>}
            </div>
        </div>
    )
}

export default Books
