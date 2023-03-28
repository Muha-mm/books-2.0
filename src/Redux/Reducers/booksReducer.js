import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import {booksAPI} from "../../Api/api";

const initialState = {
    newBooksText: '',
    subject: 'all',
    sortBy: 'relevance',
    startIndex: 0,
    resultsCount: null,
    // id: '',
    isFetching: false,
    books: [],
    bookProfile: {}
}

const booksSlice = createSlice({
    name:'books',
    initialState,
    reducers : {
        
        changeSearchText: (state, action)=>{
            state.newBooksText = action.payload;
            console.log(state.newBooksText)
        },

        selectCategory: (state, action)=>{
            state.subject = action.payload;
        },

        selectSortBy: (state, action)=>{
            state.sortBy = action.payload
        },
        
        toggleIsFetching: (state, action)=>{
            state.isFetching = action.payload
        },

        setBookProfile: (state, action)=>{
            state.bookProfile = {...action.payload}
        },
        setBooks: (state, action)=>{
            state.startIndex = 0;
            const [books, resultsCount] = action.payload;
            state.resultsCount = resultsCount;
            state.books = [...books]
        },
        moreBooks: (state, action)=>{
            state.startIndex +=30;
            console.log("posle",state.startIndex);
            state.books.push(...action.payload)
        }   
    }
}) 

export const getBooks = (title_subject, sortBy) => {
    return (
        (dispatch) => {
        dispatch(toggleIsFetching(true))
        booksAPI.getBooks(title_subject, sortBy, 0)
            .then((response) => {
                dispatch(toggleIsFetching(false))
                response.totalItems === 0?
                    dispatch(setBooks([[], response.totalItems])):
                    dispatch(setBooks([response.items, response.totalItems]))
            })
    }
  )
}

export const getMoreBooks = (title_subject, sortBy, startIndex) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        booksAPI.getBooks(title_subject, sortBy, startIndex + 30)
            .then((response) => {
                console.log("do", startIndex)
                dispatch(toggleIsFetching(false))
                dispatch(moreBooks(response.items))
            })
    }
}

export const getBookProfile = (bookId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        booksAPI.getBookProfile(bookId)
            .then((data)=>{
                dispatch(toggleIsFetching(false))
                dispatch(setBookProfile(data.volumeInfo))
            })
    }
}

export default booksSlice.reducer
export const { moreBooks, changeSearchText, setBooks, 
    selectCategory, selectSortBy, toggleIsFetching, setBookProfile} = booksSlice.actions

