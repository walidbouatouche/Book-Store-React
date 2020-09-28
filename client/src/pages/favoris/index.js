
import React, { useEffect } from 'react'

import ListBook from '../../compenents/bookList'
import { _favoriAction } from '../../redux/_actions/favorite.action '

import { useSelector, useDispatch } from 'react-redux'
import { Alerts } from '../../compenents/alerts'

const Favori = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {


        dispatch(_favoriAction.getMyFavori())


    }, [])


    const deleteBookMaker = (favoriteId) => {
        if(window.confirm("are you sure")){
            dispatch(_favoriAction.deleteMyFavori(favoriteId))
        }
       
    }


    return (<div>


        {state.favorite.favoris &&
            <ListBook
                books={state.favorite.favoris}
                favori={false}
                getBookMakerIdFordelete={deleteBookMaker}
                deleteFavori={true}
                auth={true}
            />
        }

    </div>)
}



export default Favori;
