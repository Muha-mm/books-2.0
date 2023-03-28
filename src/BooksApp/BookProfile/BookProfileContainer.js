import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {getBookProfile} from '../../Redux/Reducers/booksReducer';
import BookProfile from "./BookProfile";
import {useParams} from "react-router-dom";

export default function BookProfileContainer (){
    const isFetching = useSelector(state=>state.books.isFetching)
    const bookProfile = useSelector(state=>state.books.bookProfile)
    const params = useParams();
    let dispatch = useDispatch();
    // получаем подробную информацию о книге при загрузке страницы профиля книги
    useEffect(()=>{
        dispatch(getBookProfile(params.id))
    },[])

    // возвращаем презентационную компоненту
    return <BookProfile  isFetching = {isFetching} bookProfile = {bookProfile} params={params}/>
}