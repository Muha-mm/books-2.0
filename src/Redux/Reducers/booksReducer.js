import {createSlice} from "@reduxjs/toolkit";
import {booksAPI} from "../../Api/api";

const initialState = {
    newBooksText: '',
    subject: 'all',
    sortBy: 'relevance',
    startIndex: 0,
    resultsCount: null,
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
    return async (dispatch) => {
        try{
        dispatch(toggleIsFetching(true))
        let response = await booksAPI.getBooks(title_subject, sortBy, 0)
        dispatch(toggleIsFetching(false))
        response.totalItems === 0?
            dispatch(setBooks([[], response.totalItems])):
            dispatch(setBooks([response.items, response.totalItems]))
        } catch(e){dispatch(toggleIsFetching(false)); alert(e)}
    }
}

export const getMoreBooks = (title_subject, sortBy, startIndex) => {
    return async (dispatch) => {
        try{
        dispatch(toggleIsFetching(true))
        let response = await booksAPI.getBooks(title_subject, sortBy, startIndex + 30)
            dispatch(toggleIsFetching(false))
            dispatch(moreBooks(response.items))
        }catch(e){dispatch(toggleIsFetching(false)); alert(e)}
    }
}

export const getBookProfile = (bookId) => {
    return async (dispatch) => {
        try{
        dispatch(toggleIsFetching(true))
        let response = await booksAPI.getBookProfile(bookId)
                dispatch(toggleIsFetching(false))
                dispatch(setBookProfile(response.volumeInfo))
        }catch(e){dispatch(toggleIsFetching(false)); alert(e)}
    }
}

export default booksSlice.reducer
export const { moreBooks, changeSearchText, setBooks, 
    selectCategory, selectSortBy, toggleIsFetching, setBookProfile} = booksSlice.actions

