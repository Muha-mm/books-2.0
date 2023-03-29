import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {
    changeSearchText,
    setBooks,
    getBooks,
    getMoreBooks,
    selectSortBy, 
    selectCategory
} from '../../Redux/Reducers/booksReducer';
import Books from "./Books";

//business logic layer
export default function BooksContainer () {
    
    // считываем данные state для манипуляций с помощью useDispatch
    const newBooksText = useSelector(state => state.books.newBooksText)
    const subject = useSelector(state => state.books.subject)
    const sortBy = useSelector(state => state.books.sortBy)
    const startIndex = useSelector(state => state.books.startIndex)

    const resultsCount = useSelector(state => state.books.resultsCount)
    const isFetching = useSelector(state => state.books.isFetching)
    const books = useSelector(state => state.books.books)

    //объяаляем useDispatch во вспомогательной переменной
    const dispatch = useDispatch();

    //далее - вся вынесенная в контейнерную компоненту бизнес-логика

    // dispatch in work
    const changeSearchTextDispatch = (e) => {dispatch(changeSearchText(e.target.value))}
    const selectCategoryDispatch = (e) => {dispatch(selectCategory(e.target.value))}
    const selectSortByDispatch = (e) => {dispatch(selectSortBy(e.target.value))}

    // вспомогательная перемменая для корректного запроса (специфика GOOGLE BOOKS API)
    let assetSubject = '';
    
    // при клике на кнопку поиска или "enter"
    const onButton = () => {
        subject === 'all' ? assetSubject = '}' : assetSubject = ',subject:' + subject + '}'
        let title_subject = `{title:${newBooksText}${assetSubject}`
        dispatch (setBooks([[], null]))

        newBooksText.trim() === ''?
            alert('please, enter the title'):
            dispatch (getBooks(title_subject, sortBy))
    }

    // при клике на кнопку "загрузить больше книг по данному запросу"
    const onMoreBooksButton = () => {
        subject === 'all' ? assetSubject = '}' : assetSubject = ',subject:' + subject + '}'
        let title_subject = `{title:${newBooksText}${assetSubject}`

        dispatch (getMoreBooks(title_subject, sortBy, startIndex))
    }

    // возвращаем презентационную компоненту с передачей необходимых для неё данных
         return   <Books books = {books} 
                         resultsCount = {resultsCount} 
                         startIndex = {startIndex}
                         changeSearchText = {changeSearchTextDispatch} 
                         isFetching = {isFetching} 
                         selectSortBy = {selectSortByDispatch} 
                         selectCategory = {selectCategoryDispatch}
                         onButton={onButton} 
                         onMoreBooksButton={onMoreBooksButton}
                         newBooksText = {newBooksText}
                         />
    }