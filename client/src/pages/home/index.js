
import React, { useEffect } from 'react'

import ListBook from '../../compenents/bookList'
import { _bookAction } from '../../redux/_actions/book.action'

import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    useEffect(() => {

        dispatch(_bookAction.getAllBook())

    }, [])
    
    const state = useSelector(state => state)
    const dispatch = useDispatch();


    return (<div>
 
        {state.book.books && <ListBook books={state.book.books} />}

    </div>)
}



export default Home;
