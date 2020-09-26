
import React, { useEffect } from 'react'

import ListBook from '../../compenents/bookList'
import { _bookAction } from '../../redux/_actions/book.action'
import { _favoriAction } from '../../redux/_actions/favorite.action '

import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
    useEffect(() => {

        dispatch(_bookAction.getAllBook())

    }, [])

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const addToFavori = (bookId) => {

     
        dispatch(_favoriAction.addToFavori({ bookId }))
    }

    return (<div>

        {state.book.books && <ListBook
            books={state.book.books}
            addBookMaker={addToFavori}
        />}

    </div>)
}



export default Home;
