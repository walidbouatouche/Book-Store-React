import React, { useEffect } from 'react'

import AddBook from './addEditBook'

import BookTable from './bookTable'
import Model from '../../compenents/model'
import { _bookAction } from '../../redux/_actions/book.action'

import { useSelector, useDispatch } from 'react-redux'

const Admin = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(_bookAction.getAllBook())

    }, [])



    const addBook = (bookData) => {
        delete bookData._id
        dispatch(_bookAction.addBook(bookData))

    }
    const _deletBook = (bookId) => {
        dispatch(_bookAction.deleteOneBook(bookId))

    }
  const _updateBook = (bookData)=>{
    dispatch(_bookAction.updateBook(bookData))
   
  }
    return (<div>


        <Model title={"add Book"} launchTitle={"+"}>

            <AddBook  addEditBook={addBook} />
        </Model>
        {state.book.books && <BookTable  updateBook={_updateBook} deletBook={_deletBook} books={state.book.books} />}

    </div>)
}



export default Admin;
