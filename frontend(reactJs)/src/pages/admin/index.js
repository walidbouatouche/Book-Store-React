import React, { useEffect } from 'react'

import AddBook from './addEditBook'

import BookTable from './bookTable'
import Model from '../../compenents/model'
import { _bookAction } from '../../redux/_actions/book.action'

import { useSelector, useDispatch } from 'react-redux'

const Admin = () => {

    useEffect(() => {

        dispatch(_bookAction.getAllBook())

    }, [])
    
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const addBook = (bookData) => {
        dispatch(_bookAction.addBook(bookData))

    }

    return (<div>


        <Model title={"add Book"} launchTitle={"+"}>

            <AddBook addEditBook={addBook} />
        </Model>
        {state.book.books && <BookTable books={state.book.books} />}

    </div>)
}



export default Admin;
