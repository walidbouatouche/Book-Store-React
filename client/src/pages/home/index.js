
import React, { useEffect } from 'react'

import ListBook from '../../compenents/bookList'
import { _bookAction } from '../../redux/_actions/book.action'
import { _favoriAction } from '../../redux/_actions/favorite.action '

import { useSelector, useDispatch } from 'react-redux'
import { Alerts } from '../../compenents/alerts'
import Auth from'../../helpers/auth'


const Home = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(_bookAction.getAllBook())
 

    }, [])



    const addToFavori = (bookId) => {


        dispatch(_favoriAction.addToFavori({ bookId }))
    }

    return (<div>
{
/* state.favorite.succes &&

<Alerts.Alertsuccess text={" Add to Favorite"} />

*/ 
}
        {state.book.books && <ListBook
            books={state.book.books}
            addBookMaker={addToFavori}
            favori={true}
            deleteFavori={false}
            auth={Auth.isAuth()}

        />}

   

    </div>)
}



export default Home;
